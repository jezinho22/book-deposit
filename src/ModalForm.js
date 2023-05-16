export default function ModalForm({ handleChange, postBook }) {
	return (
		<form onSubmit={postBook}>
			<fieldset>
				<legend>Add a book</legend>
				<label htmlFor="title">Title</label>
				<input id="title" name="title" onChange={handleChange}></input>
				<label htmlFor="description">Description</label>
				<input
					id="description"
					name="description"
					onChange={handleChange}></input>
				<label htmlFor="status">Status</label>
				<input id="status" name="status" onChange={handleChange}></input>
				<input type="submit" />
			</fieldset>
		</form>
	);
}
