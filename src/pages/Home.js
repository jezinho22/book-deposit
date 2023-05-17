import ModalForm from "../ModalForm";
import BestBooks from "../BestBooks";

export default function Home({
	books,
	showForm,
	modal,
	postBook,
	handleChange,
	deleteBook,
}) {
	return (
		<div>
			<button onClick={showForm}>Add book</button>
			{modal && <ModalForm postBook={postBook} handleChange={handleChange} />}
			<div className="bookShelf">
				{books.map((book) => {
					return <BestBooks book={book} deleteBook={deleteBook}></BestBooks>;
				})}
			</div>
		</div>
	);
}
