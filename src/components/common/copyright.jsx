import React from "react";
import { Link } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	link: {
		textDecoration: "none",
		color: "var(--primary-color)",
		filter: "brightness(0.5)",
		"&:hover": {
			filter: "brightness(0.7)",
		},
	},
}));
export default function Copyright() {
	const classes = useStyles();
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			<Link to="/" className={classes.link}>
				Daily Diary Inc.
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}
