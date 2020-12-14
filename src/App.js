import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';
import './App.css'

class BooksApp extends React.Component {

  state = {
    bookshelf: [
      { id: 0, title: 'Currently Reading', name: 'currentlyReading' },
      { id: 1, title: 'Want to Read', name: 'wantToRead' },
      { id: 2, title: 'Read', name: 'read' }
    ],
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((res) => {
        this.setState((currentState) => {
          const bookChanged = currentState.books.splice(currentState.books.findIndex(i => i.id === book), 1)[0];
          bookChanged.shelf = shelf;
          return { books: [...currentState.books, bookChanged] }
        })
      })
  }


  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/search" ><SearchBooks /></Route>
            <Route path="/" exact>
              <ListBooks
                bookshelf={this.state.bookshelf}
                books={this.state.books} 
                handleShelfChange={this.handleShelfChange}/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
