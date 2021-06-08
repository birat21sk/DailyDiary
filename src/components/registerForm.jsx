import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import { Avatar, Grid, Box, Typography, Container } from "@material-ui/core";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Form from "./common/form";
import { withStyles } from "@material-ui/core/styles";
import InputField from "./common/inputField";
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
		marginTop: theme.spacing(3),
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
	pr: {
		paddingRight: 0,
		[theme.breakpoints.up("sm")]: {
			paddingRight: theme.spacing(1),
		},
	},
	pl: {
		paddingLeft: 0,
		[theme.breakpoints.up("sm")]: {
			paddingLeft: theme.spacing(1),
		},
	},
});

class RegisterForm extends Form {
	state = {
		data: {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			confirm_password: "",
		},
		errors: {},
	};

	schema = {
		first_name: Joi.string().max(20).required().label("First Name"),
		last_name: Joi.string().max(20).required().label("Last Name"),
		email: Joi.string().email().required().label("Email address"),
		password: Joi.string()
			.alphanum()
			.min(8)
			.max(30)
			.required()
			.label("Password"),
		confirm_password: Joi.string()
			.alphanum()
			.min(8)
			.max(30)
			.required()
			.label("Confirm Password"),
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
							<Grid item xs={12} sm={6} className={classes.pr}>
								{this.renderInput("first_name", "First Name")}
							</Grid>
							<Grid item xs={12} sm={6} className={classes.pl}>
								{this.renderInput("last_name", "Last Name")}
							</Grid>
						</Grid>

						{this.renderInput("email", "Email Address", "email")}
						{this.renderInput("password", "Password", "password")}
						{this.renderInput(
							"confirm_password",
							"Confirm Password",
							"password"
						)}

						{this.renderButton("Sign up", "contained", "primary", true)}
					</form>
					<Grid container justify="flex-end" style={{ marginTop: 8 }}>
						<Grid item>
							<Link to="/login" className={classes.link}>
								Already have an account? Sign in
							</Link>
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
