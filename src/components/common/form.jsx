import React, { Component } from "react";
import Joi from "joi-browser";
import InputField from "./inputField";
// import Select from "./select";
import { FormControlLabel, Button, Checkbox } from "@material-ui/core";

class Form extends Component {
	state = {
		data: {},
		errors: {},
	};

	validate = () => {
		const options = { abortEarly: false };
		const { error } = Joi.validate(this.state.data, this.schema, options);
		if (!error) return null;

		const errors = {};

		for (let item of error.details) errors[item.path[0]] = item.message;

		return errors;
	};
	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		console.log(error);
		return error ? error.details[0].message : null;
	};

	handleChange = ({ currentTarget: input }) => {
		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		const data = { ...this.state.data };
		data[input.name] = input.value;
		this.setState({ data, errors });
	};

	handleCheckToggle = () => {
		const data = { ...this.state.data };
		data["remember"] = !data.remember;
		this.setState({ data });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const errors = this.validate();

		this.setState({ errors: errors || {} });

		if (errors) return;

		this.doSubmit();
	};

	renderButton = (
		label,
		variant = "contained",
		color = "primary",
		fullWidth = false
	) => {
		return (
			<Button
				disabled={this.validate() ? true : false}
				variant={variant}
				color={color}
				fullWidth={fullWidth}
				onClick={this.handleSubmit}
				style={{ margin: "8px 0" }}
			>
				{label}
			</Button>
			// <button disabled={this.validate()}>{label}</button>
		);
	};

	renderInput = (name, label, type = "text", required = false) => {
		const { data, errors } = this.state;
		return (
			<InputField
				type={type}
				name={name}
				value={data[name]}
				label={label}
				required={required}
				onChange={this.handleChange}
				error={errors[name]}
			/>
		);
	};

	renderCheckbox = (name, label, color = "secondary") => {
		const { data } = this.state;
		return (
			<FormControlLabel
				control={
					<Checkbox
						name={name}
						value={data.remember}
						color={color}
						checked={data.remember}
						style={{ padding: 8 }}
					/>
				}
				label={label}
				onChange={this.handleCheckToggle}
				style={{ color: "var(--text-dark)" }}
			/>
		);
	};

	// renderSelect = (name, label, options) => {
	// 	const { data, errors } = this.state;

	// 	return (
	// 		<Select
	// 			name={name}
	// 			label={label}
	// 			options={options}
	// 			value={data[name]}
	// 			error={errors[name]}
	// 			onChange={this.handleChange}
	// 		/>
	// 	);
	// };
}

export default Form;
