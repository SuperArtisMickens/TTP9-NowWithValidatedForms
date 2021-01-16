import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SubmitButton from './SubmitButton';
import { validateName, validateSal } from '../js/deon-validator';

// function Form() {

// 	return (
		
// 	);
// }

class AppForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: {
				value: '',
				error: ''
			},
			lastName: {
				value: '',
				error: ''
			},
			annualSal: {
				value: '',
				error: ''
			}
		};
	}

	submitForm(event) {
		event.preventDefault();

		// Basic error checking
		const firstNameError = validateName(this.state.firstName.value);

		if(firstNameError) {
			this.setState({
				firstName: {
					value: this.state.firstName.value,
					error: firstNameError
				}
			});
		}

		const lastNameError = validateName(this.state.lastName.value);

		if(lastNameError) {
			this.setState({
				lastName: {
					value: this.state.lastName.value,
					error: lastNameError
				}
			});
		}

		const annualSalError = validateSal(this.state.annualSal.value);

		if(annualSalError) {
			this.setState({
				annualSal: {
					value: this.state.annualSal.value,
					error: annualSalError
				}
			})
		}

		if(firstNameError || lastNameError || annualSalError) {
			return;
		}

		// Error checks have been passed, proceed
		alert(`${this.state.firstName.value} ${this.state.firstName.value} with an annual salary of $${this.state.annualSal.value} has been submitted`);
	}

	updateField(which, event) {
		// Do convenience error check
		if(event.target.value.length < 20) {
			this.setState({
				[which]: {
					value: event.target.value,
					error: this.state[which].error
				}
			});
		}

		// Implied else, do nothing
	}

	render() {
		return (
				<form onSubmit={(event) => {this.submitForm(event);}}>
			<Grid container spacing={4}>
			<Grid item lg={6}>
				<TextField fullWidth
				label="First Name"
				value={this.state.firstName.value}
				error={this.state.firstName.error != ''}
				helperText={this.state.firstName.error}
				onChange={(event) => {this.updateField('firstName', event);}}
				variant='outlined'
				/>
			</Grid>
			<Grid item lg={6}>
				<TextField fullWidth
				label="Last Name"
				value={this.state.lastName.value}
				error={this.state.lastName.error != ''}
				helperText={this.state.lastName.error}
				onChange={(event) => {this.updateField('lastName', event);}}
				variant='outlined'
				/>
			</Grid>
			<Grid item lg={6}>
				<TextField fullWidth
				label="Annual Salary"
				value={this.state.annualSal.value}
				error={this.state.annualSal.error != ''}
				helperText={this.state.annualSal.error}
				onChange={(event) => {this.updateField('annualSal', event);}}
				InputProps={{
					startAdornment: <InputAdornment position="start">$</InputAdornment>,
				}}
				/>
			</Grid>
			<Grid container justify='center'>
				<SubmitButton />
			</Grid>
			</Grid>
		</form>
		);
	}
}
export default AppForm;