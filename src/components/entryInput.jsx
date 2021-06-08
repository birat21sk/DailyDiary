import React, { useState, useEffect } from "react";
import clsx from "clsx";
import NavBar from "./common/navBar";
import SideBar from "./common/sideBar";

import { getJournalById } from "../services/fakeJournalService";
// import { getEntryById } from "../services/fakeEntryService";

import config from "../config.json";

import { makeStyles } from "@material-ui/core/styles";
import CkEditor from "./common/ckEditor";
import Loading from "./common/loading";

const useStyles = makeStyles((theme) => ({
	//appbar
	root: {
		display: "flex",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -config.drawerWidth,
		background: "#ddd",
		minHeight: "100vh",
	},
	contentShift: {
		[theme.breakpoints.up("md")]: {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		},
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
}));

const EntryInput = ({ user, match, history }) => {
	const [journal, setJournal] = useState({});

	const [toggleDrawer, setToggleDrawer] = useState(false);
	const [loading, setLoading] = useState(true);

	const classes = useStyles();
	// const theme = useTheme();
	useEffect(() => {
		const j_id = parseInt(match.params.j_id);
		const currentJournal = getJournalById(j_id);
		setJournal(currentJournal);
		if (journal) {
			setLoading(false);
			console.log(journal);
		}
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

	return !loading ? (
		<div>
			<div className={classes.root}>
				<NavBar
					user={user}
					showDrawer
					toggleDrawer={toggleDrawer}
					onDrawerToggle={handleDrawerToggle}
				/>
				<SideBar
					onClose={handleCloseDrawer}
					toggle={toggleDrawer}
					journal={journal}
				/>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: toggleDrawer,
					})}
				>
					<div className={classes.drawerHeader} />

					<CkEditor user={user} />
				</main>
			</div>
		</div>
	) : (
		<Loading />
	);
};

export default EntryInput;
