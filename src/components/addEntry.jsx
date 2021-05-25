import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
	AppBar,
	Button,
	Divider,
	Drawer,
	IconButton,
	Hidden,
	Toolbar,
	Typography,
	ClickAwayListener,
} from "@material-ui/core";
import JournalSidebarEntries from "./common/journalSidebarEntries";
import Search from "./common/search";

import { getJournalById } from "../services/fakeJournalService";

import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SettingsIcon from "@material-ui/icons/Settings";
import AddIcon from "@material-ui/icons/Add";
import AppsIcon from "@material-ui/icons/Apps";
import StarIcon from "@material-ui/icons/Star";
import CloseIcon from "@material-ui/icons/Close";

import { makeStyles } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import logo from "../image/logo_grey.svg";
import CkEditor from "./common/ckEditor";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		overflow: "hidden",
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		height: "60px",
		position: "absolute",
		[theme.breakpoints.up("sm")]: {
			position: "fixed",
		},
	},
	appBarShift: {
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		//updatee
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
		//updatee
	},
	toolbar: {
		height: "100%",
	},
	menuButton: {
		marginRight: theme.spacing(0),
		[theme.breakpoints.up("sm")]: {
			marginRight: theme.spacing(2),
		},
	},
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		background: "#1c202a",
		color: grey[50],
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
		background: "#ddd",
		minHeight: "100vh",
	},
	contentShift: {
		// transition: theme.transitions.create("margin", {
		// 	easing: theme.transitions.easing.easeOut,
		// 	duration: theme.transitions.duration.enteringScreen,
		// }),
		// marginLeft: 0,
		//updatee
		[theme.breakpoints.up("sm")]: {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		},
		//updatee
	},
	title: {
		color: "#1c202a",
		flexGrow: 1,
		fontSize: "1.2rem",
		fontWeight: "normal",
		textDecoration: "none",
	},
	navBtn: {
		textTransform: "capitalize",
		background: "#fff",
		color: "#1c202a",
		fontWeight: 900,
		"&:hover": {
			background: "#fff",
		},
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

const AddEntry = ({ user, match }) => {
	const [journal, setJournal] = useState({});
	const [toggleDrawer, setToggleDrawer] = useState(false);

	const classes = useStyles();
	// const theme = useTheme();
	useEffect(() => {
		const journalId = parseInt(match.params.id);
		const currentJournal = getJournalById(journalId);
		setJournal(currentJournal);
	}, []);

	useEffect(() => {
		if (window.innerWidth > 960) {
			setToggleDrawer(true);
		}
	}, []);

	const handleDrawerToggle = () => {
		setToggleDrawer(!toggleDrawer);
	};
	const handleCloseDrawer = () => {
		setToggleDrawer(false);
	};

	return (
		<div className={classes.root}>
			<AppBar
				color="secondary"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: toggleDrawer,
				})}
			>
				<Toolbar className={classes.toolbar}>
					<Hidden xsDown>
						<IconButton
							color="inherit"
							aria-label="toggle drawer"
							onClick={handleDrawerToggle}
							edge="start"
							className={clsx(classes.menuButton, toggleDrawer)}
						>
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Hidden smUp>
						<ClickAwayListener onClickAway={handleCloseDrawer}>
							<IconButton
								color="inherit"
								aria-label="toggle drawer"
								onClick={handleDrawerToggle}
								edge="start"
								className={clsx(classes.menuButton, toggleDrawer)}
							>
								<MenuIcon />
							</IconButton>
						</ClickAwayListener>
					</Hidden>

					<Hidden smDown>
						<Link to="/">
							<img src={logo} height="50px" alt="Logo" />
						</Link>
					</Hidden>
					<Link to="/journals" className={classes.title}>
						Daily Diary
					</Link>
					{/* <Typography variant="h6" noWrap className={classes.title}>
						Daily Diary
					</Typography> */}
					<Button
						variant="contained"
						disableElevation
						disableRipple
						color="primary"
						className={classes.navBtn}
					>
						Go PRO
					</Button>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={toggleDrawer}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.journalTitle}>
					<div className="flex-grow">{journal.title}</div>

					<IconButton className={classes.titleDropdown}>
						<ExpandMoreIcon />
					</IconButton>
					<Hidden smUp>
						<IconButton
							color="inherit"
							aria-label="toggle drawer"
							onClick={handleCloseDrawer}
							edge="start"
							className={clsx(classes.menuButton, toggleDrawer)}
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
						<StarIcon className={classes.iconBtn} />
						View starred entries
					</Button>
				</div>
				<JournalSidebarEntries
					entries={journal.entries}
					fallback={"This journal has no entries"}
				/>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: toggleDrawer,
				})}
			>
				<div className={classes.drawerHeader} />
				<CkEditor />
			</main>
		</div>
	);
};

export default AddEntry;
