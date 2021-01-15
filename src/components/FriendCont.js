import React from 'react';
import TextField from '@material-ui/core/TextField';

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
					id="friendcontactEmail"
					label="Friend Contact Email"
					required
					placeholder="username@example.com"
				/>

			</>
		);
	}
}

export default FriendCont;