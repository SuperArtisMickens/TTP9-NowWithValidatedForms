import React from 'react';
import AboutUs from './components/AboutUs';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

export default function Info(){

	return(
	    <Grid>
			{/* About Us */}
			<Grid item xs={12}>
				<Divider />
			</Grid>
			<Grid item xs={12}>
				<AboutUs />
			</Grid>
        </Grid>
	);
}