import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import './App.css';

class BooksApp extends Component {

  state = {
    bookshelf: [
      { id: 0, title: 'Currently Reading', name: 'currentlyReading' },
      { id: 1, title: 'Want to Read', name: 'wantToRead' },
      { id: 2, title: 'Read', name: 'read' }
    ],
    books: []
  };

  componentDidMount() {
    this.retriveMyBooks();
  }

  retriveMyBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  };

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((res) => {
        if (res) {
          this.retriveMyBooks();
        }
      })
  };

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/search" >
              <SearchBooks
                bookshelf={this.state.bookshelf}
                books={this.state.books}
                handleShelfChange={this.handleShelfChange} />
            </Route>
            <Route path="/" exact>
              <ListBooks
                bookshelf={this.state.bookshelf}
                books={this.state.books}
                handleShelfChange={this.handleShelfChange} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default BooksApp;
