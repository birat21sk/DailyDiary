import React from "react";
import { Link, Redirect } from "react-router-dom";
import Joi from "joi-browser";

import { Avatar, Grid, Box, Typography, Container } from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Form from "./common/form";
import { withStyles } from "@material-ui/core/styles";

import auth from "../services/fakeAuthService";
import Copyright from "./common/copyright";

const styles = (theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	text: {
		color: "var(--text-dark)",
	},
	link: {
		textDecoration: "none",
		color: "var(--primary-color)",
		filter: "brightness(0.5)",
		"&:hover": {
			filter: "brightness(0.7)",
		},
	},
});

class LoginForm extends Form {
	state = {
		data: { username: "", password: "", remember: false },
		errors: {},
	};

	schema = {
		username: Joi.string().required().label("Username"),
		password: Joi.string().required().label("Password"),
		remember: Joi.boolean(),
	};

	doSubmit = () => {
		const { data } = this.state;
		console.log("Submit server", data);

		auth.login(data.username, data.password);

		const { state } = this.props.location;

		window.location = state ? state.from.pathname : "/journals";
	};

	// handleChange = (e) => {
	// 	const data = { ...this.state.data };
	// 	data[e.currentTarget.name] = e.currentTarget.value;
	// 	this.setState({ data });
	// };

	render() {
		if (auth.getCurrentUser()) return <Redirect to="/journals" />;

		const { classes } = this.props;
		const { data } = this.state;
		return (
			<Container component="main" maxWidth="xs">
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5" className={classes.text}>
						Sign in
					</Typography>
					<form method="POST" className={classes.form}>
						{this.renderInput("username", "Username", "text")}
						{this.renderInput("password", "Password", "password")}
						{this.renderCheckbox("remember", "Remember me")}
						{this.renderButton("Sign in", "contained", "primary", true)}
					</form>
					<Grid container>
						<Grid item xs>
							<Link to="#" className={classes.link}>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link to="/signup" className={classes.link}>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</div>
				<Box mt={8}>
					<Copyright />
				</Box>
			</Container>
		);
	}
}

export default withStyles(styles)(LoginForm);
