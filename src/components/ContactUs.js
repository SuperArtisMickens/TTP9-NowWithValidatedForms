import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ContactUsForm from './ContactUsForm';

class ContactUs extends React.Component {
	render() {
		return (
			<Card>
				<CardContent>
					<Typography variant="h5" align="center" gutterBottom>
						Contact Us
					</Typography>
					<ContactUsForm />
				</CardContent>
			</Card>
		);
	}
}

export default ContactUs;