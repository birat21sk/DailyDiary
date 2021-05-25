import React from "react";
import { Button, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles({
	paper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "80px 0",
		flexDirection: "column",
		width: "100%",
		color: "#fff",
		background: "#1c202a",
		marginTop: "60px",
	},
	btn: {
		textTransform: "capitalize",
		padding: "15px 60px",
	},
	margin: {
		marginBottom: "40px",
	},
	copy: {
		display: "flex",
		justifyContent: "center",
		fontWeight: "700",
		background: "#f9b943",
		color: "#333",
	},
});

const LandingFooter = () => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Paper elevation={0} square className={classes.paper}>
				<Typography variant="h4" className={classes.margin}>
					Ready to start writing? Sign up now!
				</Typography>
				<Button
					variant="outlined"
					color="secondary"
					className={classes.btn}
					size="large"
				>
					Get Started
				</Button>
			</Paper>
			<Paper className={classes.copy}>&copy; Daily Diary Inc. 2021</Paper>
		</React.Fragment>
	);
};

export default LandingFooter;
