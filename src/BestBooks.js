import { useState, useEffect } from "react";
import axios from "axios";

function BestBooks() {
	const [books, setBooks] = useState([]);

	async function getBooks() {
		const API = "http://localhost:8080/books";
		const res = await axios.get(API);
		console.log(res.data);
		const newBooks = res.data;
		setBooks(newBooks);
	}
	/* TODO: render all the books in a Carousel */
	useEffect(() => {
		getBooks();
	}, []);

	return (
		<div>
			{books.map((book) => {
				return (
					<div>
						<h4>{book.title}</h4>
						<p>{book.description}</p>
						<p>{book.status}</p>
					</div>
				);
			})}
			{/* <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
			{this.state.books.length ? (

			) : (
				<h3>No Books Found :</h3>
			)} */}
		</div>
	);
}

export default BestBooks;
