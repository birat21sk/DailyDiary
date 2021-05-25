import React from "react";
import { Route, Redirect } from "react-router-dom";

import auth from "../../services/fakeAuthService";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
	const currentUser = auth.getCurrentUser();
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!currentUser)
					return (
						<Redirect
							to={{
								pathname: "/login",
								state: { from: props.location },
							}}
						/>
					);
				return Component ? (
					<Component {...props} user={currentUser} />
				) : (
					render(props)
				);
			}}
		/>
	);
};

export default ProtectedRoute;
