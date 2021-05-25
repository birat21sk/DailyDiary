export const tags = [
	{ id: "5b21ca3eeb7f6fbccd471818", name: "Daily" },
	{ id: "5b21ca3eeb7f6fbccd471814", name: "Tavel" },
	{ id: "5b21ca3eeb7f6fbccd471820", name: "Event" },
];

export function getcategory() {
	return tags.filter((g) => g);
}
