import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import HChecks from './HChecks';
import HRadio from './HRadio';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export default function HLogin() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                Login
            </Button>

            <Dialog

                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Login: "}</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField 
                            id="outlined-basic" 
                            label="Username" 
                            variant="outlined" 
                            
                            />
                            <br/>
                            <TextField id="outlined-basic" label="Password" variant="outlined" />
                            <br/>
                            <HChecks/>
                            <HRadio/>
                        </form>
                    </DialogContentText>
                    
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

