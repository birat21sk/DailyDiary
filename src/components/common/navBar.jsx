import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import propTypes from "prop-types";

import {
	AppBar,
	Button,
	IconButton,
	Hidden,
	Toolbar,
	Container,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Search from "./search";

import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import logo from "../../image/logo_grey.svg";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	appBar: {
		overflow: "hidden",
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		height: "60px",
		top: 0,
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
		[theme.breakpoints.up("md")]: {
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
	appName: {
		color: "#1c202a",
		// flexGrow: 1,
		fontSize: "1.2rem",
		fontWeight: 700,
		textDecoration: "none",
	},
	navBtn: {
		textTransform: "capitalize",
		background: "#1c202a",
		color: "#f9b934",
		fontWeight: 900,
		"&:hover": {
			background: "#fff",
		},
		marginRight: "0",
		[theme.breakpoints.up("sm")]: {
			marginRight: "15px",
		},
	},
	appBarProfile: {
		display: "none",
		[theme.breakpoints.up("sm")]: {
			color: "#1c202a",
			padding: "5px 0 5px 15px",
			display: "flex",
			alignItems: "center",
			borderLeft: "1px solid #1c202a",
			marginRight: "15px",
			fontWeight: "700",
			"&:hover": {
				cursor: "pointer",
			},
		},
	},
}));

const NavBar = ({
	user,
	toggleDrawer,
	onDrawerToggle,
	showDrawer,
	showSearch,
}) => {
	const classes = useStyles();

	return (
		<AppBar
			color="secondary"
			className={clsx(classes.appBar, {
				[classes.appBarShift]: toggleDrawer,
			})}
		>
			<Toolbar className={classes.toolbar}>
				<Container className="d-flex align-ic">
					{showDrawer && (
						<div>
							<Hidden smDown>
								<IconButton
									color="inherit"
									aria-label="toggle drawer"
									onClick={onDrawerToggle}
									edge="start"
									className={clsx(classes.menuButton, toggleDrawer)}
								>
									<MenuIcon />
								</IconButton>
							</Hidden>
							<Hidden mdUp>
								{/* <ClickAwayListener onClickAway={onDrawerClose}> */}
								<IconButton
									color="inherit"
									aria-label="toggle drawer"
									onClick={onDrawerToggle}
									edge="start"
									className={clsx(classes.menuButton, toggleDrawer)}
								>
									<MenuIcon />
								</IconButton>
								{/* </ClickAwayListener> */}
							</Hidden>
						</div>
					)}

					<Hidden xsDown>
						<Link to="/">
							<img src={logo} height="50px" alt="Logo" />
						</Link>
					</Hidden>
					<Link to="/journals" className={classes.appName}>
						Daily Diary
					</Link>
					{showSearch ? (
						<div className="flex-grow">
							<Hidden smDown>
								<Search className={"d-flex justify-cc"} stretch="20ch" />
							</Hidden>
						</div>
					) : (
						<div className="flex-grow"></div>
					)}
					<Button
						variant="contained"
						disableElevation
						disableRipple
						color="primary"
						className={classes.navBtn}
					>
						Go PRO
					</Button>
					<div className={classes.appBarProfile}>
						<span>{user.first_name}</span>
						<ArrowDropDownIcon />
					</div>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

NavBar.defaultProps = {
	showDrawer: false,
	showSearch: false,
};

NavBar.propTypes = {
	user: propTypes.object.isRequired,
	showDrawer: propTypes.bool,
	showSearch: propTypes.bool,
	toggleDrawer: propTypes.bool,
	onDrawerToggle: propTypes.func,
};

export default NavBar;
