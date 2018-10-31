import React, { Component } from 'react'
import PropTypes from 'prop-types';
import imageNotFound from '../images/imageNotFound.jpg';

import SelfChanger from './SelfChanger'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {

        const {book, books, updateShelf} = this.props

        let thumbnailImg = '';

        book.imageLinks === undefined
            ? thumbnailImg = imageNotFound
            : thumbnailImg = book.imageLinks.thumbnail
        
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("'+thumbnailImg+'")'}}></div>
                        <SelfChanger book={book} books={books} updateShelf={updateShelf}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
            
        )
    }
}
export default Book