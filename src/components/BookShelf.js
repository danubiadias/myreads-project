import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Book from './Book'

class BookShelf extends Component {

    static propTypes = {
        shelf: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {

        const { shelf, books, updateShelf } = this.props;

        return (
            <div className="bookshelf" >
                <h2 className="bookshelf-title">{shelf.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books
                            .filter((book) => book.shelf === shelf.type)
                            .map((book) =>
                                <Book key={book.id} book={book} books={books} updateShelf={updateShelf} />
                            )
                        }
                    </ol>
                </div>
            </div>
        )
    }

}
export default BookShelf