import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import BooksList from './BooksList';

class MyReads extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {

        const {books, updateShelf} = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <BooksList books={books} updateShelf={updateShelf}/>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
            
        )
    }
}
export default MyReads