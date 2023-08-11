import { useState, useEffect } from "react";

const BookInd = ({book, onChangeShelf}) => {
    const [shelf, setShelf] = useState("");
    useEffect(() => {
        if ('shelf' in book) {
            setShelf(book.shelf);
        } else {
            setShelf('none');
        }
    }, [book]);
    const onChange = (event) => {
        setShelf(event.target.value);
        onChangeShelf(book, event.target.value);
    };
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        backgroundImage: book.imageLinks ? 'url("'+book.imageLinks.thumbnail + '")' : 'none',
                        height: 180,
                        width: 130,
                    }}
                >
                </div>
                <div className="book-shelf-changer">
                    <select value={shelf} onChange={onChange}>
                        <option disabled>
                            {shelf === "none" ? 'Add to...' : 'Move to...'}
                        </option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">Remove</option>
                        {shelf !== 'none'}
                    </select>
                </div>
            </div>
            <div className="book-title">{book?.title}</div>
            <div className="book-authors">{book?.authors?.join(", ")}</div>
        </div>
    );
};
export default BookInd;