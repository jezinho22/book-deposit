import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BookPage from "./pages/BookPage";
import "./App.css";

function App() {
	const [books, setBooks] = useState([]);
	const [modal, setmodal] = useState(false);
	const [form, setForm] = useState({});

	useEffect(() => {
		console.log("Used effect");
		getBooks();
	}, []);

	function showForm() {
		setmodal(!modal);
	}

	async function getBooks() {
		console.log("Going to get books");
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
		<BrowserRouter>
			<div className="App">
				<Header />
				<h2>My Book Shelf</h2>
				<Routes>
					<Route
						path="/"
						element={
							<Home
								showForm={showForm}
								modal={modal}
								books={books}
								postBook={postBook}
								handleChange={handleChange}
								deleteBook={deleteBook}
							/>
						}
					/>
					<Route path="/about" element={<About />} />
					<Route path="/book/:id" element={<BookPage />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
