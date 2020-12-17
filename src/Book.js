import React from 'react';

const Book = ({ book, bookshelf, handleShelfChange }) => {
    const bookShelfChangerRender = () => {
        return bookshelf.map(shelf => (
            <option
                key={shelf.id}
                value={shelf.name}>
                {shelf.title}
            </option>
        ))
    };

    const { title = '', authors = [], imageLinks = '', shelf = 'none' } = book;

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select value={shelf} 
                    onChange={(e) => { handleShelfChange(book, e.target.value) }}>
                        <option value="move" disabled>Move to...</option>
                        {bookShelfChangerRender()}
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors.join(', ')}</div>
        </div>
    );
};

export default Book;