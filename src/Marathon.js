import React from 'react';
import DayChallange from './components/DayChallange';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

export default function Marathon(){

	return(
	    <Grid>
            	{/* Challenge */}
			<Grid item xs={12}>
				<Divider />
			</Grid>
				<Grid item xs={12}>
				<DayChallange />
			</Grid>
        </Grid>
	);
}
