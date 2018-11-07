import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import BooksList from './BooksList';

const MyReads = (props) => {

    const { books, updateShelf } = props;

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <BooksList books={books} updateShelf={updateShelf} />
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>

    )
}

MyReads.propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
}

export default MyReads