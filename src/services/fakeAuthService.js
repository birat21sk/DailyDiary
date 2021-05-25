const user = {
	id: 1,
	username: "john@domain.com",
	first_name: "John",
	last_name: "Doe",
	is_pro: true,
};
// const user = {
// 	id: "2",
// 	username: "john@domain.com",
// 	first_name: "John",
// 	last_name: "Doe",
// 	is_pro: false,
// };

const getCurrentUser = () => {
	return user;
};

const auth = {
	getCurrentUser,
};

export default auth;
