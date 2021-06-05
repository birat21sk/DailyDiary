import React from "react";
import {
	FormControl,
	FormHelperText,
	InputLabel,
	OutlinedInput,
} from "@material-ui/core";

const InputField = ({ name, label, error, required, ...rest }) => {
	const isError = error ? true : false;
	return (
		<FormControl
			variant="outlined"
			fullWidth
			required={required}
			style={{ margin: "8px 0" }}
		>
			<InputLabel htmlFor={name} error={isError}>
				{label}
			</InputLabel>
			<OutlinedInput
				id={name}
				label={label}
				name={name}
				error={isError}
				aria-describedby="validation-error-text"
				{...rest}
			/>
			{error && (
				<FormHelperText id="validation-error-text" error={isError}>
					{error}
				</FormHelperText>
			)}
		</FormControl>
	);
};

InputField.defaultProps = {
	required: false,
};

export default InputField;
