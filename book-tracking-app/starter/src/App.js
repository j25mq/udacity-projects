import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import ListOfBooks from "./ListOfBooks";
import BookShelf from "./BookShelf";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  const [showSearchPage, setShowSearchpage] = useState([]);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      console.log(res);
    };
    getBooks();
  }, []);
  const updateUI = (book, shelf) => {
    const updateBook = async () => {
      const res = await BooksAPI.update(book, shelf);
      book.shelf = shelf;
      const newBook = books.filter(b => b.id !== book.id).concat(book);
      setBooks(newBook);
    };
    updateBook();
  };
  return (
    <Routes>
      <Route
        exact path="/"
        element={
          <div className="list-books">
            <header className="list-books-title">
              <h1>MyReads</h1>
              <Link to="/search" id="search-tab">
                <svg id="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                Search a book...
              </Link>
            </header>
            <div className="list-books-content">
              <BookShelf shelf="currentlyReading" title="Currently reading" books={books} onChangeShelf={updateUI} />
              <BookShelf shelf="wantToRead" title="Want to read" books={books} onChangeShelf={updateUI} />
              <BookShelf shelf="read" title="Read" books={books} onChangeShelf={updateUI} />
            </div>
          </div>
        }
      />
      <Route
          path="/search"
          element={
            <ListOfBooks books={books} onChangeShelf={updateUI} />
          }
        />
      </Routes>
  );
};
export default App;