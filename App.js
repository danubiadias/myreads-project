import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './utils/BooksAPI'

import MyReads from './components/MyReads.js'
import SearchBooks from './components/SearchBooks.js'

import './App.css'

class BooksApp extends Component {

  state = {
    books: []
  }


  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  updateShelf = (changedBook, destinationShelf) => {

    const updatedBook = {
      ...changedBook,
      shelf: destinationShelf
    }

    BooksAPI.update(updatedBook, destinationShelf).then(response => {

      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== updatedBook.id)
          .concat(updatedBook)
      }));

      alert("Book moved successfully!")
      
    });
  };

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
            <MyReads books={this.state.books} updateShelf={this.updateShelf} />
        )}
        />
        <Route path="/search" render={({ history }) => (
          <SearchBooks books={this.state.books} updateShelf={this.updateShelf} />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
