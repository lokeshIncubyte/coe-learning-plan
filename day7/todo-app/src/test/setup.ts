import '@testing-library/jest-dom'

// Polyfill localStorage if missing (for Vitest/node environments)
if (typeof window !== 'undefined' && (!window.localStorage || typeof window.localStorage.clear !== 'function')) {
	let store: { [key: string]: string } = {};
	window.localStorage = {
		getItem(key: string) { return store[key] || null; },
		setItem(key: string, value: string) { store[key] = String(value); },
		removeItem(key: string) { delete store[key]; },
		clear() { store = {}; },
		key(i: number) { return Object.keys(store)[i] || null; },
		get length() { return Object.keys(store).length; }
	} as Storage;
}
