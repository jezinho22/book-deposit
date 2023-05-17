import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BookPage() {
	const [book, setBook] = useState({});
	const [form, setForm] = useState({
		title: "",
		description: "",
		status: "",
	});

	const { id } = useParams();

	useEffect(() => {
		getCat();
	}, []);

	async function getCat() {
		const API = `http://localhost:8080/books?_id=${id}`;
		const res = await axios.get(API);
		setBook(res.data[0]);
		setForm({
			title: res.data[0].title,
			description: res.data[0].description,
			status: res.data[0].status,
		});
	}
	// handle changes in form and keep up to date record
	function handleChange(event) {
		const newForm = { ...form, [event.target.name]: event.target.value };
		setForm(newForm);
	}

	async function updateBook(event) {
		event.preventDefault();
		const API = `http://localhost:8080/books/${id}`;
		const updatedBook = await axios.put(API, form);
		console.log(updatedBook);
	}
	return (
		<div>
			<div className="bookPageBook">
				<h2>{book.title}</h2>
				<p>{book.description}</p>
				<p>{book.status}</p>
			</div>
			<form onSubmit={updateBook}>
				<fieldset>
					<legend>Amend book details</legend>
					<label htmlFor="title">Title</label>
					<input
						id="title"
						name="title"
						onChange={handleChange}
						value={form.title}></input>
					<label htmlFor="description">Description</label>
					<input
						id="description"
						name="description"
						onChange={handleChange}
						value={form.description}></input>
					<label htmlFor="status">Status</label>
					<input
						id="status"
						name="status"
						onChange={handleChange}
						value={form.status}></input>
					<input type="submit" />
				</fieldset>
			</form>
		</div>
	);
}
