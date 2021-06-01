import * as tagAPI from "./fakeTagService";

const entries = [
	{
		id: 1,
		title: "The State of Waiting",
		content: `"<p><span style="background-color:rgb(255,255,255);color:rgb(60,67,74);font-family:Georgia, serif;">It is June 2019. Moutaz Al-Qershi, her fiancé, lives in the northern Yemeni capital city of Sana’a. He was going to meet her when she landed in the port city of Aden. But she knows she can’t trust herself not to fling her arms around him and kiss him. In the U.S., where Wafa has lived for the last four years, public affection is normal for young couples, but in Yemen, unmarried couples can’t publicly embrace. She told him to wait at her family’s home.</span></p><figure class="image image-style-align-right image_resized" style="width:50%;"><img src="https://longreadsblog.files.wordpress.com/2021/05/objects-layered-over-couple-photos.jpg?quality=80&amp;strip=info&amp;w=800"></figure><p>&nbsp;</p><p><span style="background-color:rgb(255,255,255);color:rgb(60,67,74);">Not that Wafa cares about what other people think. She’s waited too long. She has a lady in Sana’a baking her wedding cake (she found her on Facebook). There is a butter shortage, but she’s got connections. She’s even got a female DJ lined up.</span></p><blockquote><p><span style="background-color:rgb(255,255,255);color:rgb(100,105,112);">Wafa and Moutaz exemplify the long-haul love story of many immigrants, whose children, parents, and spouses remain on the other side of geopolitical barriers.</span></p></blockquote><p><span style="background-color:rgb(255,255,255);color:rgb(60,67,74);">At the time, she was in high school and he studied electrical engineering at Sana’a University. Wafa had a huge, trusting smile, expressive eyes, and a laugh that rose up out of her chest. She recalls how taken aback he was during their first interaction: <i>“All the ideas that I tell him, and my hijab is not very on point. … I don’t have makeup on my face. So he’s like, you’re not normal.” &nbsp;</i> Moutaz was a serious, slender introvert, prone to long conversations on mathematical concepts. He was detail-oriented; she was all big ideas.</span></p>"`,
		tag: [{ id: 1, name: "daily" }],
		trash: false,
		date_posted: "2021-05-27 09:34:17.910625",
		author_id: 1,
		journal_id: 1,
	},
	{
		id: 2,
		title: "That excitement",
		content:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
		tag: [{ id: 1, name: "daily" }],
		trash: false,
		date_posted: "2021-05-12 09:34:17.910625",
		author_id: 1,
		journal_id: 1,
	},
	{
		id: 3,
		title: "My first day at work",
		content:
			"Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. ",
		tag: [{ id: 1, name: "daily" }],
		trash: false,
		date_posted: "2021-05-12 09:34:17.910625",
		author_id: 1,
		journal_id: 1,
	},
	{
		id: 4,
		title: "My First day",
		content:
			"Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc",
		tag: [{ id: 1, name: "daily" }],
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
