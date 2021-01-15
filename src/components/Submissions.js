import React from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Poll from './Poll';
import AppForm from './AppForm';

class Submissions extends React.Component {
    render() {
        return (
            <>
                {/* Application */}
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <AppForm />
                </Grid>



                {/* Poll */}
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Poll />
                </Grid>


                
            </>
        );
    }
}

export default Submissions;