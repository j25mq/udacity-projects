import BookInd from "./BookInd";

const BookShelf = ({ books, title, shelf, onChangeShelf}) => {
    return (
        <div className="book-shelf">
            <h1 className="book-shelf-title">{title}</h1>
            <div className="book-shelf-books">
                <div className="books-grid">
                    {books.filter(b => b.shelf === shelf).map((b, i) => (
                        <BookInd key={i} book={b} onChangeShelf={onChangeShelf} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default BookShelf;