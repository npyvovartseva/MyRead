import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BooksList from './BooksList';

class SearchBooks extends Component {

    state = {
        query: '',
        books: []
    };

    componentDidUpdate(prevProps, prevState) {
        prevState.query !== this.state.query ? this.search(this.state.query): clearTimeout(this._timerId);
        prevProps.books !== this.props.books && this.setState((currentState) => ({ books: this.mapSelfBooksToSearch(currentState.books) }));
    }

    _query = '';
    _timerId = null;

    handelChange = e => {
        this._query = e.target.value;
        this._timerId = setTimeout(() => {
            this.setState({ query: this._query })
        }, 500);
    };

    search = query => {
        if (this.state.query !== '') {
            BooksAPI.search(query)
                .then(res =>
                    Array.isArray(res) ? this.setState({ books: this.mapSelfBooksToSearch(res) }) : this.setState({ books: [] })
                )
        }
        else {
            this.setState({ books: [] });
        }
    };

    mapSelfBooksToSearch(books) {
        return books.map(book => {
            let myBook = this.props.books.find(myBook => myBook.id === book.id);
            book.shelf = myBook ? myBook.shelf : 'none';
            return book;
        })
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" query={this.state.query} onChange={this.handelChange} placeholder="Search by title or author" />
                    </div>
                </div>
                {this.state.books.length > 0 ?
                    <div className="search-books-results">
                        <ol className="books-grid">
                            <BooksList
                                books={this.state.books}
                                bookshelf={this.props.bookshelf}
                                handleShelfChange={this.props.handleShelfChange} />
                        </ol>
                    </div> :
                    <div className="no-books-found">
                        <div></div>
                        <h2>no books to show</h2>
                    </div>}
            </div>
        );
    }
}

export default SearchBooks;