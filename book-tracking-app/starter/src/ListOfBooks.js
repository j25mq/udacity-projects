import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookInd from "./BookInd";

const ListOfBooks = ({ books, onChangeShelf }) => {
    const [query, setQuery] = useState("");    
    const [searchedBook, setSearchedBooks] = useState([]);
    const updateQuery = async (query) => {
        setQuery(query);
        if (query.length === 0) {
            setSearchedBooks([]);
        } else {
            const res = await BooksAPI.search(query);
            if (res.error) {
                setSearchedBooks([]);
            } else {
                const res2 = res.map(searchedBook => {
                    books.forEach(book => {
                        if (book.id === searchedBook.id)
                            searchedBook.shelf = book.shelf;
                        });
                    return searchedBook;
                });
                setSearchedBooks(res2);
            };
        };
    };
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search"></Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={(event) => updateQuery(event.target.value)}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searchedBook.map((b, i) => (
                        <BookInd book={b} key={i} onChangeShelf={onChangeShelf} />
                    ))}
                </ol>
            </div>
        </div>
    );
};
export default ListOfBooks;