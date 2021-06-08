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
const tokenKey = "token";

export const getCurrentUser = () => {
	const userStr = localStorage.getItem(tokenKey);
	const user = JSON.parse(userStr);
	return user;
};

export const login = (username, password) => {
	const userStr = JSON.stringify(user);
	localStorage.setItem(tokenKey, userStr);
};

export function logout() {
	localStorage.removeItem(tokenKey);
}

export default { getCurrentUser, login, logout };
