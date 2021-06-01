import auth from "./fakeAuthService";
import { getJournalEntries } from "./fakeEntryService";

const journals = [
	{
		id: 1,
		title: "Life in a paper",
		theme_id: 1,
		author_id: 1,
	},
	{
		id: 2,
		title: "Will Power",
		theme_id: 1,
		author_id: 1,
	},
	{
		id: 3,
		title: "Journal 1",
		theme_id: 1,
		author_id: 2,
	},
];

export function getAuthorJournals(user) {
	return journals.filter((j) => j.author_id === user.id);
}
export function getJournalById(journal_id) {
	// return journals.filter(
	// 	(j) => j.id === journal_id && j.author_id === author_id
	// );
	const journal = journals.find((j) => j.id === journal_id);
	const entries = getJournalEntries(journal_id);
	const currentJournal = { ...journal, entries };
	return currentJournal;
}

export function saveJournal(entry) {
	let journalInDB = journals.find((m) => m.id === entry.id) || {};
	journalInDB.title = entry.name;
	journalInDB.theme_id = entry.theme_id;
	journalInDB.author_id = auth.getCurrentUser().id;

	if (!journalInDB.id) {
		journalInDB.id = Date.now();
		journals.push(journalInDB);
	}

	return journalInDB;
}

export function deleteJournal(id) {
	let journalInDB = journals.find((m) => m.id === id);
	journals.splice(journals.indexOf(journalInDB), 1);
	return journalInDB;
}
