import { useState, useEffect } from "react";
import axios from "axios";

export default function useBanderas() {
	const [banderas, setBanderas] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchBanderas = async () => {
			try {
				const response = await axios.get(
					"https://countriesnow.space/api/v0.1/countries/flag/images",
				);
				setBanderas(response.data.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchBanderas();
	}, []);

	return { banderas, loading, error };
}
