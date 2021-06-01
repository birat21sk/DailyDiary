import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-build-ddiary";
import { makeStyles, Container, TextField } from "@material-ui/core";

import { getEntryById } from "../../services/fakeEntryService";

import TodayIcon from "@material-ui/icons/Today";
import TextFormatIcon from "@material-ui/icons/TextFormat";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.up("md")]: {
			padding: "16px 64px",
		},
	},
	content: {
		background: "#fff",
		boxShadow:
			"8px 0px 0px 0px #DCD0C0, 0px 8px 0px 0px #B1938B, -8px 0px 0px 0px #4E4E56,  0px 0px 0px 8px #DA635D, 5px 5px 13px -12px rgba(0,0,0,0)",
		padding: "16px 8px",
		[theme.breakpoints.up("sm")]: {
			padding: "16px",
		},
		[theme.breakpoints.up("md")]: {
			padding: "32px",
		},
	},
	titleInput: {
		width: "100%",
	},
	preCKE: {
		display: "flex",
		alignItems: "center",
		width: "99%",
		height: "40px",
		background: "var(--ck-color-toolbar-background)",
		padding: "0 var(--ck-spacing-small)",
		borderTop: "1px solid var(--ck-color-toolbar-border)",
	},
	preCKEIcon: {
		color: "var(--ck-color-text)",
		margin: "0 var(--ck-spacing-extra-tiny)",
		"&:hover": {
			cursor: "pointer",
		},
	},
	preCKEDate: {
		display: "flex",
		alignItems: "center",
		flexGrow: 1,
		color: "var(--ck-color-text)",
	},
	marginRight: {
		marginRight: theme.spacing(1),
	},
}));

const CkEditor = ({ user, history }) => {
	const classes = useStyles();
	const [entry, setEntry] = useState({});
	const [loading, setLoading] = useState(false);

	const getDateFormat = (dateStr) => {
		const dateObj = new Date(dateStr);
		const postedDate = `${dateObj.toDateString().slice(0, 3)}, ${dateObj
			.toISOString()
			.slice(0, 10)}`;
		return postedDate;
	};

	const editorContainer = (
		<Container className={classes.root} maxWidth="md">
			<div className={classes.content} id="entryForm">
				<form autoComplete="off">
					<div className="d-flex">
						{loading ? (
							<Skeleton
								animation="wave"
								variant="circle"
								width={40}
								height={40}
								style={{ marginRight: "10px" }}
							/>
						) : (
							<StarRoundedIcon
								style={{
									color: "var(--ck-color-engine-placeholder-text)",
									fontSize: "2rem",
									marginRight: "10px",
								}}
							/>
						)}

						{loading ? (
							<Skeleton variant="text" animation="wave" width="90%" />
						) : (
							<TextField
								id="entryTitle"
								variant="outlined"
								className={classes.titleInput}
								placeholder="Title Here"
								value={entry.title}
							/>
						)}
					</div>
					{loading ? (
						<Skeleton
							variant="rect"
							animation="wave"
							width="99%"
							height={40}
							style={{ marginTop: "8px" }}
						/>
					) : (
						<div className={classes.preCKE}>
							<div className={classes.preCKEDate}>
								<TodayIcon fontSize="small" className={classes.marginRight} />
								{entry
									? console.log("Entry date 984656789651", entry.date_posted)
									: getDateFormat(Date.now())}
							</div>
							<div className="d-flex align-ic">
								<LocalOfferIcon
									className={classes.preCKEIcon}
									fontSize="small"
								/>
								<TextFormatIcon className={classes.preCKEIcon} />
								<MoreHorizIcon className={classes.preCKEIcon} />
							</div>
						</div>
					)}
					{loading ? (
						<Skeleton
							variant="rect"
							animation="wave"
							width="99%"
							height="70vh"
							style={{ marginTop: "8px" }}
						/>
					) : (
						<CKEditor
							editor={ClassicEditor}
							config={{ placeholder: "Write your day here..." }}
							data=""
							onReady={(editor) => {
								// You can store the "editor" and use when it is needed.
								console.log("Editor is ready to use!", editor);
							}}
							onChange={(event, editor) => {
								const data = editor.getData();
								console.log({ event, editor, data });
							}}
							onBlur={(event, editor) => {
								console.log("Blur.", editor);
							}}
							onFocus={(event, editor) => {
								console.log("Focus.", editor);
							}}
						/>
					)}
				</form>
			</div>
		</Container>
	);

	return editorContainer;
};

export default CkEditor;
