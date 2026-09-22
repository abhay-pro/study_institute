const MAX_ITEMS = 100;
const MAX_TEXT_LENGTH = 500;

export const storageKeys = {
	enquiries: "demo-academy-enquiries",
	reviews: "demo-academy-reviews",
};

export const cleanText = (value, maxLength = MAX_TEXT_LENGTH) =>
	String(value ?? "")
		.replace(/[<>]/g, "")
		.trim()
		.slice(0, maxLength);

export const readStoredList = (key, fallback = []) => {
	try {
		const stored = window.localStorage.getItem(key);
		if (!stored) return fallback;
		const parsed = JSON.parse(stored);
		return Array.isArray(parsed) ? parsed.slice(0, MAX_ITEMS) : fallback;
	} catch {
		return fallback;
	}
};

export const writeStoredList = (key, items) => {
	try {
		window.localStorage.setItem(key, JSON.stringify(items.slice(0, MAX_ITEMS)));
	} catch {
		// Storage can be unavailable in private browsing or restricted webviews.
	}
};

export const createSafeRecord = (record, fields) =>
	Object.fromEntries(
		fields.map(([field, maxLength]) => [field, cleanText(record[field], maxLength)]),
	);
