"use client";

import { useEffect, useState } from "react";
import useBanderas from "@/hooks/useBanderas";
import useLocalStorage from "@/hooks/useLocalStorage";
import Juego from "./components/Juego";

export default function Home() {
	const [bandera, setBandera] = useState(null);
	const [puntos, setPuntos] = useLocalStorage("puntos", 0);
	const { banderas, loading, error } = useBanderas();

	useEffect(() => {
		if (banderas.length > 0) {
			setBandera(banderas[Math.floor(Math.random() * banderas.length)]);
		}
	}, [banderas]);

	const handleAdivinar = (intento) => {
		if (intento.toLowerCase() === bandera.name.toLowerCase()) {
			setPuntos(puntos + 10);
		} else {
			setPuntos(puntos - 1);
		}
		setBandera(banderas[Math.floor(Math.random() * banderas.length)]);
	};

	if (error) return <p>Hubo un error: {error.message}</p>;

	return (
		<main className="main">
			<header className="header">
				<h1>Adivina la Bandera!</h1>
				<p>Puntos: {puntos}</p>
			</header>

			{bandera && <Juego bandera={bandera} handleAdivinar={handleAdivinar} />}
		</main>
	);
}
