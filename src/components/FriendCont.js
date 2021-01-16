import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SubmitButton from './SubmitButton';




class FriendCont extends React.Component {
	render() {
		return (
			<>
				<TextField
					id="friendcontact"
					label="Friend's Name"
					required
					fullWidth
					multiline
				/>

        <TextField
					id="friendphone"
					label="Friend's Tel. No"
					required
					fullWidth
					multiline
				/>

				<TextField
					id="friendcontactEmail"
					label="Friend Contact Email"
					required
					placeholder="username@example.com"
				/>

        <SubmitButton />
			</>
		);
	}
}

export default FriendCont;