import { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue) {
	const [storedValue, setStoredValue] = useState(initialValue);

	useEffect(() => {
		const item = window.localStorage.getItem(key);
		if (item) {
			setStoredValue(JSON.parse(item));
		} else {
			setStoredValue(initialValue);
		}
	}, [key, initialValue]);

	const setValue = (value) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.error(error);
		}
	};

	return [storedValue, setValue];
}
