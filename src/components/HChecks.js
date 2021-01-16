import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function HChecks() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormGroup row>

            <FormControlLabel
                control={
                    <Checkbox
                        onChange={handleChange}
                        name="checkedC"
                        color="primary"
                    />
                }
                label="Happy" />

            <FormControlLabel
                control={
                    <Checkbox
                        onChange={handleChange}
                        name="checkedC"
                        color="primary"
                    />
                }
                label="Sad" />

        </FormGroup>
    );
}