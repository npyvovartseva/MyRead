import React from 'react';
import Book from './Book';

const BooksList = ({ books, bookshelf, handleShelfChange }) => {
    const renderBooks = () => {
        return books.map(book => (
            <li key={book.id}>
                <Book
                    book={book}
                    bookshelf={bookshelf}
                    handleShelfChange={handleShelfChange} />
            </li>
        ))
    };

    return (
        <ol className="books-grid">
            {renderBooks()}
        </ol>
    );
};

export default BooksList;