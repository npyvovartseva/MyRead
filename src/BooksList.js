import React, { Component } from 'react';
import Book from './Book';

class BooksList extends Component {
    renderBooks() {
        return this.props.books.map(({id, title, authors, imageLinks}) => (
            <li key={id}>
                <Book
                    title={title}
                    authors={authors.join(', ')}
                    backgroundImage={imageLinks.smallThumbnail} 
                    bookshelf={this.props.bookshelf}
                    currentBookshelf={this.props.currentBookshelf}/>
            </li>
        ))
    }

    render() {
        return (
            <ol className="books-grid">
                {this.renderBooks()}
            </ol>
        )
    }
}

export default BooksList;