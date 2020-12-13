import React, { Component } from 'react';
import BooksList from './BooksList';

class BookShelf extends Component {
    bookShelfTitle(){
        return this.props.bookshelf.find(shelf=>shelf.id===this.props.currentBookshelf).title;
    }
    render() {
        
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.bookShelfTitle()}</h2>
                <div className="bookshelf-books">
                    <BooksList 
                    books={this.props.books} 
                    bookshelf={this.props.bookshelf} 
                    currentBookshelf={this.props.currentBookshelf} />
                </div>
            </div>
        )
    }
}

export default BookShelf;