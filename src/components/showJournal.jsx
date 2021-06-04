import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Paper, Box, Button, Divider } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import ListIcon from "@material-ui/icons/List";
import SettingsIcon from "@material-ui/icons/Settings";
import LockIcon from "@material-ui/icons/Lock";

const useStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		flexGrow: 1,
		display: "flex",
		borderRadius: "10px",
		minHeight: "450px",

		[theme.breakpoints.up("sm")]: {
			minHeight: "550px",
		},
	},
	diarySpine: {
		borderRadius: "10px 0 0 10px",
		background: "#333",
		width: 0,
		[theme.breakpoints.up("sm")]: {
			width: "10%",
		},
	},
	diaryCover: {
		position: "relative",
		borderRadius: "0 10px 10px 0",
		width: "100%",
		height: "calc(width)",
		[theme.breakpoints.up("sm")]: {
			width: "90%",
		},
	},
	diaryCoverLink: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		background: "#dbe6f6",
		// background: "-webkit-linear-gradient(to bottom, #e8cbc0, #636fa4)",
		// background: "linear-gradient(to bottom, #e8cbc0, #636fa4)",
	},
	diaryCoverBox: {
		position: "absolute",
		zIndex: 1,
		background: "rgba(255,255,255,0.7)",
		height: "50%",
		width: "90%",
		borderRadius: "10px",
		top: "20%",
		left: "50%",
		transform: "translateX(-50%)",
		[theme.breakpoints.up("sm")]: {
			width: "80%",
			height: "35%",
		},
	},
	journalTitle: {
		height: "60%",
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "2rem",
		textTransform: "capitalize",
		textDecoration: "none",
		color: "rgba(0, 0, 0, 0.87)",
	},
	journalAction: {
		display: "flex",
		height: "40%",
	},
	journalActionBtn: {
		textTransform: "capitalize",
		fontSize: "1.2rem",
		fontWeight: "300",
	},
}));

const ShowJournal = ({ journal }) => {
	const classes = useStyles();

	return (
		<Paper elevation={1} className={classes.root}>
			<Paper className={classes.diarySpine} />
			<Paper className={classes.diaryCover}>
				<Link
					to={"/journals/" + journal.id}
					className={classes.diaryCoverLink}
				/>
				<Box className={classes.diaryCoverBox}>
					<Link to={"/journals/" + journal.id} className={classes.journalTitle}>
						{journal.title}
					</Link>
					{/* Use Theme for font size, family ... */}
					<Divider />
					<div className={classes.journalAction}>
						<Button
							style={{ flexGrow: 3 }}
							className={classes.journalActionBtn}
						>
							<CreateIcon /> New Entry
						</Button>
						<Divider orientation="vertical" />
						<Button
							style={{ flexGrow: 1 }}
							className={classes.journalActionBtn}
						>
							<ListIcon />
						</Button>
						<Divider orientation="vertical" />
						<Button
							style={{ flexGrow: 1 }}
							className={classes.journalActionBtn}
						>
							<SettingsIcon />
						</Button>
						<Divider orientation="vertical" />
						<Button
							style={{ flexGrow: 1 }}
							className={classes.journalActionBtn}
						>
							<LockIcon />
						</Button>
					</div>
				</Box>
			</Paper>
		</Paper>
	);
};

export default ShowJournal;
