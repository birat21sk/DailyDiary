import React from "react";
import {
	Divider,
	List,
	ListItem,
	Typography,
	makeStyles,
} from "@material-ui/core";
import EventAvailableOutlinedIcon from "@material-ui/icons/EventAvailableOutlined";

const useStyles = makeStyles((theme) => ({
	list: {
		paddingTop: 0,
	},
	root: {
		display: "flex",
		flexGrow: 1,
		flexDirection: "column",
		alignItems: "flex-start",
		background: "rgba(255,255,255,0.05)",
		"&:hover": {
			background: "rgba(255,255,255,0.1)",
		},
	},
	dateField: {
		display: "flex",
		alignItems: "flex-end",
	},
	datePosted: {
		fontSize: "0.7rem",
	},
	ellipses: {
		width: "100%",
	},
	entries: {
		padding: "10px",
		fontSize: "1rem",
	},
}));

const JournalSidebarEntries = ({ entries, fallback }) => {
	const classes = useStyles();

	const getDateFormat = (dateStr) => {
		const dateObj = new Date(dateStr);
		const postedDate = `${dateObj.toDateString().slice(0, 3)}, ${dateObj
			.toISOString()
			.slice(0, 10)}`;
		return postedDate;
	};

	if (!entries || entries.length === 0) {
		return <Typography paragraph>{fallback}</Typography>;
	} else {
		return (
			<List className={classes.list}>
				<Typography variant="h6" className={classes.entries}>
					Entries
				</Typography>
				{entries.map((entry, idx) => (
					<div key={idx}>
						<ListItem button className={classes.root}>
							{/* <ListItemText primary={entry.title} /> */}
							<Typography noWrap className={classes.ellipses}>
								{entry.title}
							</Typography>
							<div className={classes.dateField}>
								<EventAvailableOutlinedIcon fontSize="small" />
								<Typography className={classes.datePosted}>
									{getDateFormat(entry.date_posted)}
								</Typography>
							</div>
						</ListItem>
						<Divider />
					</div>
				))}
			</List>
		);
	}
};

export default JournalSidebarEntries;
