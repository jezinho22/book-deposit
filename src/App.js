import Header from "./Header";
import Footer from "./Footer";
import BestBooks from "./BestBooks";
import ModalForm from "./ModalForm";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
	const [books, setBooks] = useState([]);
	const [modal, setmodal] = useState(false);
	const [form, setForm] = useState({});

	useEffect(() => {
		getBooks();
	}, []);

	function showForm() {
		setmodal(!modal);
	}

	async function getBooks() {
		const API = "http://localhost:8080/books";
		const res = await axios.get(API);
		const newBooks = res.data;
		setBooks(newBooks);
	}
	function handleChange(event) {
		console.log("changed");
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	async function postBook(event) {
		event.preventDefault();
		const API = "http://localhost:8080/books/";
		console.log(form.title, form.description, form.status);
		await axios.post(API, form);
		console.log("Made a new book");
		showForm();
		getBooks();
		// showForm();
	}
	/* TODO: render all the books in a Carousel */

	async function deleteBook(id) {
		const API = `http://localhost:8080/books/${id}`;
		await axios.delete(API);
		getBooks();
	}
	return (
		<div className="App">
			<Header />
			<h2>My Book Shelf</h2>

			<button onClick={showForm}>Add book</button>
			{modal && <ModalForm postBook={postBook} handleChange={handleChange} />}
			<div className="bookShelf">
				{books.map((book) => {
					return <BestBooks book={book} deleteBook={deleteBook}></BestBooks>;
				})}
			</div>
			<Footer />
		</div>
	);
}

export default App;
