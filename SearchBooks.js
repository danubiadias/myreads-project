import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input';

import * as BooksAPI from './../utils/BooksAPI'

import Book from './Book'
import NoResutsFound from './NoResultsFound'


class SearchBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    state = {
        querySearch: '',
        results: [],
        emptyResult: false

    }

    getBooks = (e) => {

        const query = e.target.value;

        this.setState(() => ({
            querySearch: query
        }))

        if (query) {
            BooksAPI.search(query.trim()).then(books => {
                books.length > 0
                    ? this.setState({
                        results: books,
                        emptyResult: false
                    })
                    : this.setState({
                        results: [],
                        emptyResult: true
                    });

            });
        } else {
            this.setState({ results: [], emptyResult: false })
        }

    }

    clearQuery = () => {
        this.setState({ querySearch: '', results: [], emptyResult: false });
    }

    render() {

        const { books, updateShelf } = this.props;

        const { querySearch, results, emptyResult } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            type="text"
                            placeholder="Search by title or author"
                            debounceTimeout={500}
                            value={querySearch}
                            onChange={this.getBooks}
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    {results.length > 0 && (
                        <div>
                            <h4 align="center">Now showing {results.length} results - <Link to="/search" onClick={this.clearQuery}>Clear Search</Link></h4>
                            <ol className="books-grid">
                                {this.state.results.map((book) =>
                                    (<Book key={book.id} book={book} books={books} updateShelf={updateShelf} />)
                                )}
                            </ol>
                        </div>
                    )}
                    {emptyResult && (
                        <NoResutsFound />
                    )}
                </div>
            </div>
        )
    }
} export default SearchBooks