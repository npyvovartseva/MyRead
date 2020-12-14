import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class ListBooks extends Component {
    filterBooksByShelf(shelf) {
        return this.props.books.filter(book => book.shelf === shelf)
    }

    renderBookShelfs() {
        return this.props.bookshelf.map(shelf => (
            <BookShelf
                key={shelf.id}
                currentBookshelf={shelf.id}
                books={this.filterBooksByShelf(shelf.name)}
                bookshelf={this.props.bookshelf}
                handleShelfChange={this.props.handleShelfChange}
            />
        ))
    }
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.renderBookShelfs()}
                    </div>
                </div>
                <div className="open-search">
                    {/*  */}
                    <Link to="/search"><button>Add a book</button></Link>
                </div>
            </div>

        )
    }
}

export default ListBooks;