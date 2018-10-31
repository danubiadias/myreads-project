import React, { Component } from 'react'
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';


class BooksList extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {

        const {books, updateShelf} = this.props;

        const shelfTypes = [
            { type: 'currentlyReading', title: 'Currently Reading' },
            { type: 'wantToRead', title: 'Want to Read' },
            { type: 'read', title: 'Read' }
        ];

        return (
            <div className="list-books-content">
                <div>
                    {shelfTypes.map((shelfType) => 
                        (<BookShelf key={shelfType.type} shelf={shelfType} books={books} updateShelf={updateShelf}/>)
                    )}
                </div>
            </div>
        )
    }
}
export default BooksList