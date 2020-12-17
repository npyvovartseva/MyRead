import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import BooksList from './BooksList';

const ListBooks = props => {
    const filterBooksByShelf = shelf => {
        return props.books.filter(book => book.shelf === shelf)
    };

    const renderBookShelfs = () => {
        return props.bookshelf.map(shelf => (
            <BookShelf
                key={shelf.id}
                currentBookshelf={shelf.id}
                bookshelf={props.bookshelf}>
                <BooksList
                    books={filterBooksByShelf(shelf.name)}
                    bookshelf={props.bookshelf}
                    handleShelfChange={props.handleShelfChange} />
            </BookShelf>
        ))
    };

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {renderBookShelfs()}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search"><button>Add a book</button></Link>
            </div>
        </div>
    );
};

export default ListBooks;