import React from 'react';
import TextField from '@material-ui/core/TextField';

class EmailMessage extends React.Component {
	render() {
		return (
			<>
				<TextField
					id="contactEmail"
					label="Email"
					required
					placeholder="username@example.com"
				/>
				<TextField
					id="contactMessage"
					label="Message"
					required
					fullWidth
					multiline
				/>
			</>
		);
	}
}

export default EmailMessage;