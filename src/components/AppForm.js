import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SubmitButton from './SubmitButton';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(2),
			width: 400,
		},
	},
}));

function Form() {
	const classes = useStyles();

	return (
		<form className={classes.root} direction="row" justify="flex-start" noValidate autoComplete="off">

			<TextField id="first-name" size="medium" label="First Name" />
			<TextField id="last-name" label="Last Name" />

			<TextField
				label="Annual Salary"
				id="standard-start-adornment"
				className={clsx(classes.margin, classes.textField)}
				InputProps={{
					startAdornment: <InputAdornment position="start">$</InputAdornment>,
				}}
			/>

			<SubmitButton />
		</form>
	);
}

class AppForm extends React.Component {

	render() {
		return (
			<Grid item xs={3} lg={6}>
				<Form />
			</Grid>
		);
	}
}
export default AppForm;