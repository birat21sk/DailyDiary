import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-build-ddiary";
import {
	makeStyles,
	Container,
	Typography,
	TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		padding: "8px 0",
		[theme.breakpoints.up("sm")]: {
			padding: "16px 64px",
		},
	},
	content: {
		background: "#fff",
		boxShadow:
			"8px 0px 0px 0px #DCD0C0, 0px 8px 0px 0px #B1938B, -8px 0px 0px 0px #4E4E56, 0px 0px 0px 8px #DA635D, 5px 5px 13px -12px rgba(0,0,0,0)",
		padding: "8px 0",
		[theme.breakpoints.up("sm")]: {
			padding: "32px",
		},
	},
	titleInput: {
		fontSize: "1.3rem",
	},
}));

const CkEditor = () => {
	const classes = useStyles();
	return (
		<Container className={classes.root} maxWidth="md">
			<div className={classes.content} id="entryForm">
				<form autoComplete="off">
					<TextField
						id="entryTitle"
						variant="outlined"
						className={classes.titleInput}
					/>
					<CKEditor
						editor={ClassicEditor}
						data="<p>Placeholder</p>"
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
				</form>
			</div>
		</Container>
	);
};

export default CkEditor;
