import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { Avatar, Grid, Box, Typography, Container } from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Form from "./common/form";
import { withStyles } from "@material-ui/core/styles";
import InputField from "./common/inputField";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link to="https://material-ui.com/">Your Website</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

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
		console.log("Submit server");
	};

	// handleChange = (e) => {
	// 	const data = { ...this.state.data };
	// 	data[e.currentTarget.name] = e.currentTarget.value;
	// 	this.setState({ data });
	// };

	render() {
		const { classes } = this.props;
		const { data } = this.state;
		return (
			<Container component="main" maxWidth="xs">
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form method="POST" className={classes.form}>
						{this.renderInput("username", "Username")}
						{this.renderInput("password", "Password", "password")}
						{this.renderCheckbox("remember", "Remember me")}
						{this.renderButton("Sign in", "contained", "secondary", true)}
					</form>
					<Grid container>
						<Grid item xs>
							<Link to="#">Forgot password?</Link>
						</Grid>
						<Grid item>
							<Link to="/signup">{"Don't have an account? Sign Up"}</Link>
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
