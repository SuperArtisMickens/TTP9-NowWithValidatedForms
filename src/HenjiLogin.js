import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
	usernames,
	passwords
} from './HValidation/HValid';
import { DialogContent } from '@material-ui/core';
import HRadio from './components/HRadio';

class Controlled extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hUsernames: {
				value: '',
				error: ''
			},
			hPasswords: {
				value: '',
				error: ''
			},
		};
	}


	submitForm(event) {
		event.preventDefault();

		// create a copy of state variables so we can build the error messages
		let hVals = this.state;

		// do basic error checking
		// if error is an empty string '', then that means there's no error

		hVals.hUsernames.error = usernames(this.state.hUsernames.value);
		hVals.hPasswords.error = passwords(this.state.hPasswords.value);


			// all error statuses should be updated here
			// so we can set it
			this.setState(hVals);

		if (hVals.hUsernames.error !== '' ||
			hVals.hPasswords.error !== '') {
			// has at least 1 error
			// so quit

			return;
		}

		// all error checks have been passed and have been found valid
		// so proceed!



		alert('submission');
	}

	update_field(which, event) {
		// do a convenience error check
		if (event.target.value.length < 20) {
			this.setState({
				[which]: {
					value: event.target.value,
					error: this.state[which].error
				}
			});
		}

		// implied else
		// do nothing!
	}

	render() {
		return (
			<div>
				<form onSubmit={(event) => { this.submitForm(event); }}>

					<DialogContent>
						<h2>Login: </h2>
						<Grid
							item
							lg={6}>
							<TextField
								fullWidth
								label='Username'
								value={this.state.hUsernames.value}
								error={this.state.hUsernames.error != ''}
								helperText={this.state.hUsernames.error}
								onChange={(event) => { this.update_field('hUsernames', event); }}
								variant='outlined' />
						</Grid>
					</DialogContent>

					<DialogContent>
						<Grid
							item
							lg={6}>
							<TextField
								fullWidth
								label='Password'
								value={this.state.hPasswords.value}
								error={this.state.hPasswords.error != ''}
								helperText={this.state.hPasswords.error}
								onChange={(event) => { this.update_field('hPasswords', event); }}
								variant='outlined' />
						</Grid>
					</DialogContent>

					<DialogContent>
						<Button
							color='primary'
							variant='contained'
							type='submit'>
							Submit
		    			</Button>
					</DialogContent>
				</form>
				<HRadio />
			</div>
		);
	}
}

export default Controlled;