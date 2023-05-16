function BestBooks({ book, deleteBook }) {
	return (
		<div className="displayBook">
			<h4>{book.title}</h4>
			<p>{book.description}</p>
			<p>{book.status}</p>
			<button onClick={() => deleteBook(book._id)}>Remove book</button>

			{/* <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
			{this.state.books.length ? (

			) : (
				<h3>No Books Found :</h3>
			)} */}
		</div>
	);
}

export default BestBooks;
