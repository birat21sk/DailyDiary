import React from "react";
import { InputBase, makeStyles, fade } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ className, stretch }) => {
	const useStyles = makeStyles((theme) => ({
		searchField: {
			position: "relative",
			borderRadius: "20px",
			color: theme.palette.common.white,
			backgroundColor: fade(theme.palette.common.black, 0.4),
			"&:hover": {
				backgroundColor: fade(theme.palette.common.black, 0.5),
			},
			marginLeft: 0,
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				marginLeft: theme.spacing(1),
				width: "auto",
				display: "flex",
			},
		},
		searchIconStyle: {
			padding: theme.spacing(0, 2),
			height: "100%",
			position: "absolute",
			pointerEvents: "none",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		inputRootStyle: {
			color: "inherit",
		},
		inputInputStyle: {
			padding: theme.spacing(1, 1, 1, 0),
			// vertical padding + font size from searchIcon
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create("width"),
			width: "100%",
			[theme.breakpoints.up("sm")]: {
				width: "12ch",
				"&:focus": {
					width: stretch,
				},
			},
		},
	}));

	const classes = useStyles();
	return (
		<div className={className}>
			<div className={classes.searchField}>
				<div className={classes.searchIconStyle}>
					<SearchIcon />
				</div>
				<InputBase
					placeholder="Search…"
					classes={{
						root: classes.inputRootStyle,
						input: classes.inputInputStyle,
					}}
					inputProps={{ "aria-label": "search" }}
				/>
			</div>
		</div>
	);
};
export default Search;
