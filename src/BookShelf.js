import React from 'react';

const BookShelf = ({bookshelf, currentBookshelf, children }) => {
    const bookShelfTitle = () => {
        return bookshelf.find(shelf => shelf.id === currentBookshelf).title;
    };

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelfTitle()}</h2>
            <div className="bookshelf-books">
                {children}
            </div>
        </div>
    );
};

export default BookShelf;