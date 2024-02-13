function Shouter() {
	const [text, setText] = useState('')

	const handleInputChange = (event) => {
		setText(event.target.value.toUpperCase())
	}

	return (
		<div>
			<input type='text' onChange={handleInputChange} />
			<output>{text}</output>
		</div>
	)
}

export default Shouter
