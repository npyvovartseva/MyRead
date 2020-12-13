import React, { Component } from 'react';

class Book extends Component {
    bookShelfChangerRender() {
        return this.props.bookshelf.map(shelf => (
            <option  key={shelf.id} value={shelf.name}>{shelf.title}</option>
        ))
    }
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.backgroundImage})` }}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            {this.bookShelfChangerRender()}
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }
}

export default Book;