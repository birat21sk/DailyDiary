import React from "react";
import {
	FormControl,
	FormHelperText,
	InputLabel,
	OutlinedInput,
} from "@material-ui/core";

const InputField = ({ name, label, error, required, ...rest }) => {
	return (
		<FormControl
			variant="outlined"
			fullWidth
			required={required}
			style={{ margin: "8px 0" }}
		>
			<InputLabel htmlFor={name}>{label}</InputLabel>
			<OutlinedInput
				id={name}
				label={label}
				name={name}
				error={error ? true : false}
				{...rest}
			/>
			{error && (
				<FormHelperText id="component-error-text">{error}</FormHelperText>
			)}
		</FormControl>
	);
};

InputField.defaultProps = {
	required: false,
};

export default InputField;
