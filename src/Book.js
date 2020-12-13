import React, { Component } from 'react';

class Book extends Component {
    bookShelfChangerRender() {
        return this.props.bookshelf.map(shelf => (
            <option
                key={shelf.id}
                value={shelf.name}>
                {shelf.title}
            </option>
        ))
    }

    handleShelfChange = (e) => {
        this.props.handleShelfChange(this.props.id, e.target.value);
    }
    handleShelfChange = this.handleShelfChange.bind(this);

    bookShelfName() {
        return this.props.bookshelf.find(shelf => shelf.id === this.props.currentBookshelf).name;
    }
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.backgroundImage})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.bookShelfName()} onChange={this.handleShelfChange}>
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