import React from 'react';
import { Button } from '@material-ui/core';

class SubmitButton extends React.Component {

	render() {
		return (
			<Button variant='contained' color="primary" type="submit">Submit</Button>
		);
	}
}

export default SubmitButton;