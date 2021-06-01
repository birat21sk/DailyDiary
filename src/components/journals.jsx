import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Toolbar,
	makeStyles,
	Container,
	Grid,
	Button,
	Typography,
	fade,
	InputBase,
	Hidden,
} from "@material-ui/core";
// import logo from "../image/logo_svg.svg";
// import auth from "../services/fakeAuthService";

import Search from "./common/search";
import NavBar from "./common/navBar";
import ShowJournal from "./showJournal";

import { getAuthorJournals } from "./../services/fakeJournalService";
// import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
	themeNav: {
		color: theme.palette.common.white,
		minHeight: "50px",
		display: "flex",
		background: "#1c202a",
		marginTop: "60px",
		marginBottom: "24px",
	},
	navBtn: {
		textTransform: "capitalize",
		color: "#f9b934",
		background: "#1c202a",
		fontWeight: 900,
		"&:hover": {
			background: "#fff",
		},
	},
	appName: {
		color: "#1c202a",
		// flexGrow: 1,
		fontSize: "1.2rem",
		fontWeight: "normal",
		textDecoration: "none",
	},
	addJournalIcon: {
		position: "relative",
		width: "25px",
		textAlign: "left",
		display: "none",
		[theme.breakpoints.up("sm")]: {
			display: "block",
		},
	},
}));

const plusInAddJournal = {
	position: "absolute",
	top: "0",
	right: "5px",
};

const Journals = (props) => {
	const { user: currentUser } = props;
	const [user] = useState(currentUser);
	const [userJournals, setUserJournals] = useState([]);

	useEffect(() => {
		const journalData = getAuthorJournals(user);
		setUserJournals(journalData);
	}, [user]);

	const classes = useStyles();
	return (
		<React.Fragment>
			{/* <Toolbar className={classes.titleNav}>
				<Container className="d-flex align-ic">
					<Link to="/" className={classes.appName}>
						Daily Diary
					</Link>
					<div className="flex-grow">
						<Hidden smDown>
							<Search className={"d-flex justify-cc "} stretch="20ch" />
						</Hidden>
					</div>
					<Button
						variant="contained"
						disableElevation
						disableRipple
						color="primary"
						className={classes.navBtn}
					>
						Go PRO
					</Button>
				</Container>
			</Toolbar> */}
			<NavBar user={user} showSearch />
			<Toolbar className={classes.themeNav}>
				<Container maxWidth="md" className="d-flex align-ic">
					<div className="flex-grow">
						Displaying {userJournals.length}{" "}
						{userJournals.length <= 1 ? " journal" : " journals"}
					</div>
					<Button variant="contained" color="secondary" className="btn">
						<div className={classes.addJournalIcon}>
							<i class="fa fa-file-text-o" aria-hidden="true"></i>
							<i
								class="fa fa-plus-circle"
								aria-hidden="true"
								style={plusInAddJournal}
							></i>
						</div>
						new journal
					</Button>
				</Container>
			</Toolbar>
			<Container maxWidth="md">
				<Grid container spacing={3}>
					{userJournals.map((journal, idx) => (
						<Grid key={idx} item xs={12} sm={8}>
							<ShowJournal journal={journal} />
						</Grid>
					))}
					{!user.is_pro && <Grid item>no pro</Grid>}
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default Journals;
