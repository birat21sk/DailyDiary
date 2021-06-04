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
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
});

class RegisterForm extends Form {
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
						Sign up
					</Typography>
					<form className={classes.form}>
						<Grid container>
							<Grid item xs={12} sm={6}>
								{this.renderInput("first_name", "First Name")}
							</Grid>
							<Grid item xs={12} sm={6}>
								{this.renderInput("last_name", "Last Name")}
							</Grid>
						</Grid>

						{this.renderInput("email", "Email Address", "email")}
						{this.renderInput("password1", "Password", "password")}
						{this.renderInput("password2", "Confirm Password", "password")}

						{this.renderButton("Sign up", "contained", "primary", true)}
					</form>
					<Grid container justify="flex-end">
						<Grid item>
							<Link to="/login">Already have an account? Sign in</Link>
						</Grid>
					</Grid>
				</div>
				<Box mt={5}>
					<Copyright />
				</Box>
			</Container>
		);
	}
}

export default withStyles(styles)(RegisterForm);
