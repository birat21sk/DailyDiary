import React from "react";
import { makeStyles } from "@material-ui/core";
import pen from "../../image/pen.svg";
import { Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
	root: {
		position: "fixed",
		width: "100vw",
		height: "100vh",
		background: "#ddd",
		zIndex: "-5",
	},
	content: {
		position: "absolute",
		top: "40%",
		left: "50%",
		width: "auto",
		transform: "translateX(-50%)",
	},
	pen: {
		width: "60px",
		position: "absolute",
		bottom: "10px",
	},
	write: {
		transform: "translate(-5px,55px)",
		animation: "$write 2s infinite",
	},
	loading: {
		display: "flex",
		justifyContent: "center",
		position: "relative",
		float: "left",
		"&:after": {
			content: "'. '",
			animation: "$dots 2s steps(4, end) infinite",
		},
	},
	"@keyframes dots": {
		"0%, 10%": {
			color: "rgba(0,0,0,0)",
			textShadow: ".25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0)",
		},
		"20%": {
			color: "black",
			textShadow: ".25em 0 0 rgba(0,0,0,0),.5em 0 0 rgba(0,0,0,0)",
		},
		"30%": {
			textShadow: ".25em 0 0 black,.5em 0 0 rgba(0,0,0,0)",
		},
		"50% ": {
			textShadow: ".25em 0 0 black,.5em 0 0 black",
		},
		"70%": {
			textShadow: ".25em 0 0 black,.5em 0 0 rgba(0,0,0,0)",
		},
		"80%": {
			color: "black",
			textShadow: ".25em 0 0 rgba(0,0,0,0),.5em 0 0 rgba(0,0,0,0)",
		},
		"90%, 100%": {
			color: "rgba(0,0,0,0)",
			textShadow: ".25em 0 0 rgba(0,0,0,0), .5em 0 0 rgba(0,0,0,0)",
		},
	},
	"@keyframes write": {
		"0%": {
			transform: "translate(-7px,55px)",
		},
		"16.67%": {
			transform: "translate(6px,55px)",
		},
		"33.33%": {
			transform: "translate(19px,55px)",
		},
		"50%": {
			transform: "translate(32px,55px)",
		},
		"66.67%": {
			transform: "translate(19px,55px)",
		},
		"83.33%": {
			transform: "translate(6px,55px)",
		},
		"100%": {
			transform: "translate(-7px,55px)",
		},
	},
});

const Loading = ({ classes }) => {
	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<Typography variant="h3" className={classes.loading} component="div">
					Loading
				</Typography>
				<div className={classes.write}>
					<img src={pen} className={classes.pen} alt="pen" />
				</div>
			</div>
		</div>
	);
};

export default withStyles(styles)(Loading);
