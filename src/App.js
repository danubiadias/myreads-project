import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './utils/BooksAPI'

import './App.css'

import MyReads from './components/MyReads.js'
import SearchBooks from './components/SearchBooks.js'


class BooksApp extends React.Component {

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

    BooksAPI.update(changedBook, destinationShelf).then(response => {
      
      changedBook.shelf = destinationShelf;
      
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== changedBook.id)
          .concat(changedBook)
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
