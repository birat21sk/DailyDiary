import React from "react";
import { Button, Drawer, IconButton, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import JournalSidebarEntries from "./journalSidebarEntries";
import Search from "./search";

import config from "../../config.json";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SettingsIcon from "@material-ui/icons/Settings";
import AddIcon from "@material-ui/icons/Add";
import AppsIcon from "@material-ui/icons/Apps";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import CloseIcon from "@material-ui/icons/Close";

import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: config.drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		background: "#1c202a",
		color: grey[50],
		width: config.drawerWidth,
	},
	white: {
		color: "#fafafa",
	},
	journalTitle: {
		display: "flex",
		position: "relative",
		alignItems: "center",
		padding: "10px",
		color: "#fafafa",
		fontSize: "1.2rem",
		fontWeight: "700",
	},
	titleDropdown: {
		color: "#fafafa",
	},
	journalTitleDropdown: {
		position: "absolute",
		top: 28,
		right: 0,
		left: 0,
		zIndex: 1,
		border: "1px solid",
		padding: theme.spacing(1),
		backgroundColor: theme.palette.background.paper,
	},
	setting: {
		padding: 0,
		color: "#fff",
	},
	btnContainer: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		marginTop: "10px",
	},
	actionBtn: {
		display: "flex",
		borderRadius: 0,
		textTransform: "capitalize",
		fontWeight: 700,
		flexGrow: 1,
		width: "100%",
		background: "rgba(255,255,255,0.1)",
		padding: "10px 20px",
		justifyContent: "flex-start",
		color: "#fafafa",
		[theme.breakpoints.up("sm")]: {
			padding: "15px 20px",
		},
		"&:hover": {
			background: "rgba(255,255,255,0.2)",
		},
		"&:nth-child(1)": {
			background: "#f9b934",
			color: "#1c202a",
			fontWeight: 700,
		},
	},
	iconBtn: {
		marginRight: "5px",
	},
}));

const SideBar = ({ onClose, toggle, journal }) => {
	const classes = useStyles();
	return (
		<Drawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={toggle}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.journalTitle}>
				<div className="flex-grow">{journal.title}</div>

				<IconButton className={classes.titleDropdown}>
					<ExpandMoreIcon />
				</IconButton>
				<Hidden mdUp>
					<IconButton
						color="inherit"
						aria-label="toggle drawer"
						onClick={onClose}
						edge="start"
					>
						<CloseIcon />
					</IconButton>
				</Hidden>
			</div>
			<div className="d-flex align-ic">
				<Search className={"d-flex w-100"} />
				<Button className={classes.setting}>
					<SettingsIcon />
				</Button>
			</div>
			<div className={classes.btnContainer}>
				<Button
					variant="contained"
					disableElevation
					className={classes.actionBtn}
				>
					<AddIcon className={classes.iconBtn} />
					<span>Add Entry</span>
				</Button>
				<Button
					variant="contained"
					disableElevation
					className={classes.actionBtn}
				>
					<AppsIcon className={classes.iconBtn} />
					View all entries
				</Button>
				<Button
					variant="contained"
					disableElevation
					className={classes.actionBtn}
				>
					<StarRoundedIcon className={classes.iconBtn} />
					View starred entries
				</Button>
			</div>
			<JournalSidebarEntries
				entries={journal.entries}
				fallback={"This journal has no entries"}
			/>
		</Drawer>
	);
};

export default SideBar;
