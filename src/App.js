// import React, { useState, useEffect, useContext } from "react";
import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AOS from "aos";
import { routes } from "./routes/routes.jsx";
// import auth from "./services/fakeAuthService";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ProtectedRoute from "./components/common/protectedRoute";

// import UserContext from './context/userContext';

import CssBaseline from "@material-ui/core/CssBaseline";
import "aos/dist/aos.css";
import "./App.css";

function App() {
	// const [user, setUser] = useState({});

	useEffect(() => {
		AOS.init({
			duration: 700,
		});
	}, []);

	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");

	const theme = React.useMemo(
		() =>
			createMuiTheme({
				typography: {
					fontFamily: "Lato, Arial",
				},
				palette: {
					type: prefersDarkMode ? "dark" : "light",
					primary: {
						main: "#3f51b5",
						// dark: "#1b1642",
					},
					secondary: {
						main: "#f9b934",
					},
					gray: {
						main: "#718096",
					},
					dark: {
						main: "#2d3748",
					},
				},
			}),
		[prefersDarkMode]
	);

	// handleUserLogIn = (uname, pswd) => {};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<main className="main">
				<Switch>
					{routes.map((route, idx) => {
						if (!route.requireAuth) {
							return (
								<Route
									key={idx}
									exact
									path={route.path}
									component={route.component}
								/>
							);
						} else {
							return (
								<ProtectedRoute
									key={idx}
									exact
									path={route.path}
									component={route.component}
								/>
							);
						}
					})}
					<Redirect from="/journals/:id" to="/journals/:id/new" />
					<Redirect to="/not-found" />
				</Switch>
			</main>
		</ThemeProvider>
	);
}

export default App;
