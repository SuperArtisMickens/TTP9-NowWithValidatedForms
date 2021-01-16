import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// limits input characters
const MESSAGE = 1000;
const EMAIL = 256;
const VERIFICATION = 5;

// generates a random verification integer between 1000 and 9999
const RANDOM = String(Math.floor(Math.random() * 9000) + 1000);

class ContactUsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: {
				value: '',
				error: ''
			},
			email: {
				value: '',
				error: ''
			},
			verification: {
				value: '',
				error: ''
			}
		};
	}
	// updates text field if below character limits
	updateField(stateStr, event) {
		if ((stateStr === 'message' && event.target.value.length < MESSAGE) || (stateStr === 'email' && event.target.value.length < EMAIL) || (stateStr === 'verification' && event.target.value.length < VERIFICATION)) {
			this.setState({
				[stateStr]: {
					value: event.target.value,
					error: this.state[stateStr].error
				}
			});
		}
	}
	// scans email address for at sign, period, and invalid whitespace
	checkEmail(value) {
		if (value.includes('@') && value.includes('.') && !value.includes(' ')) {
			return '';
		} else {
			return 'Invalid email address'
		}
	}
	// validates user verification
	checkVerification(value) {
		if (value === RANDOM) {
			return '';
		} else {
			return `Enter ${RANDOM}`;
		}
	}
	// checks email and verification
	submitForm(event) {
		event.preventDefault();
		let tempState = this.state;
		tempState.email.error = this.checkEmail(this.state.email.value);
		tempState.verification.error = this.checkVerification(this.state.verification.value);
		this.setState(tempState);
		if (this.state.email.error !== '' || this.state.verification.error !== '') {
			return;
		}
		alert("Message sent!");
	}
	render() {
		return (
			<form onSubmit={(event) => { this.submitForm(event); }}>
				<Grid container spacing={2}>
					{/* message */}
					<Grid item xs={12}>
						<TextField
							variant="filled"
							label="Message"
							placeholder="Enter your message"
							value={this.state.message.value}
							error={this.state.message.error !== ''}
							helperText={this.state.message.error}
							onChange={(event) => { this.updateField('message', event); }}
							required
							fullWidth
							multiline
						/>
					</Grid>
					{/* email */}
					<Grid item xs={12} md={6}>
						<TextField
							variant="filled"
							label="Email"
							placeholder="username@example.com"
							value={this.state.email.value}
							error={this.state.email.error !== ''}
							helperText={this.state.email.error}
							onChange={(event) => { this.updateField('email', event); }}
							required
							fullWidth
						/>
					</Grid>
					{/* verification */}
					<Grid item xs={12} md={6}>
						<TextField
							variant="filled"
							label="Verification"
							placeholder={`Enter ${RANDOM}`}
							value={this.state.verification.value}
							error={this.state.verification.error !== ''}
							helperText={this.state.verification.error}
							onChange={(event) => { this.updateField('verification', event); }}
							required
							fullWidth
						/>
					</Grid>
					{/* send message button */}
					<Grid item xs={12}>
						<Button variant="contained" color="primary" type='submit' fullWidth>
							Send Message
						</Button>
					</Grid>
				</Grid>
			</form>
		);
	}
}

export default ContactUsForm;