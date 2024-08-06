import { useState, useEffect } from "react";

export default function Juego({ bandera, handleAdivinar }) {
	const [inputValue, setInputValue] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		handleAdivinar(inputValue);
		setInputValue("");
	};

	return (
		<div className="juego">
			<h2>¿Qué bandera es esta?</h2>
			<form onSubmit={onSubmit}>
				<img src={bandera.flag} alt={bandera.name} />
				<input
					id="inputBandera"
					type="text"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					autoComplete="off"
					placeholder="Adivina la bandera..."
				/>
				<button type="submit">Adivinar</button>
			</form>
		</div>
	);
}
