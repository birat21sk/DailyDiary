import * as tagAPI from "./fakeTagService";

const entries = [
	{
		id: 1,
		title:
			"My first Day is awesome it was full of fun but something was really really sick",
		text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. ",
		tag: { id: 1, name: "daily" },
		trash: false,
		date_posted: "2021-05-12 09:34:17.910625",
		author_id: 1,
		journal_id: 1,
	},
	{
		id: 2,
		title: "My Second day was test for wrap",
		text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
		tag: { id: 1, name: "daily" },
		trash: false,
		date_posted: "2021-05-12 09:34:17.910625",
		author_id: 1,
		journal_id: 1,
	},
	{
		id: 3,
		title: "My Third day",
		text: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. ",
		tag: { id: 1, name: "daily" },
		trash: false,
		date_posted: "2021-05-12 09:34:17.910625",
		author_id: 1,
		journal_id: 1,
	},
	{
		id: 4,
		title: "My First day",
		text: "Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
		tag: { id: 1, name: "daily" },
		trash: false,
		date_posted: "2021-05-12 09:34:17.910625",
		author_id: 2,
		journal_id: 2,
	},
];

export function getJournalEntries(journal_id) {
	return entries.filter((en) => en.journal_id === journal_id);
}

export function getEntryById(id) {
	return entries.find((en) => en.id === id);
}

export function saveEntry(entry) {
	let entryInDb = entries.find((m) => m.id === entry.id) || {};
	entryInDb.name = entry.name;
	entryInDb.tag = tagAPI.tags.find((g) => g.id === entry.tag_id);
	entryInDb.numberInStock = entry.numberInStock;
	entryInDb.dailyRentalRate = entry.dailyRentalRate;

	if (!entryInDb.id) {
		entryInDb.id = Date.now();
		entries.push(entryInDb);
	}

	return entryInDb;
}

export function deleteEntry(id) {
	let entryInDb = entries.find((m) => m.id === id);
	entries.splice(entries.indexOf(entryInDb), 1);
	return entryInDb;
}
