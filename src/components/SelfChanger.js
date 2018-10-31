import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ShelfChanger extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    changeShelf = event => this.props.updateShelf(this.props.book, event.target.value);

    render() {

        const {book, books} = this.props

        let shelf = 'none';

        for(let bookItem of books)
        {
            if(bookItem.id === book.id)
            {
                shelf = bookItem.shelf;
                break;
            }
        }

        return (

            <div className="book-shelf-changer">
                <select onChange={this.changeShelf} defaultValue={shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
export default ShelfChanger