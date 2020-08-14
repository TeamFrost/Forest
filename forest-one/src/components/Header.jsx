import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import header from "../img/header.png";
import siglamica from "../img/siglamica.png";
import CallIcon from '@material-ui/icons/Call';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 1920,
        height: 680,
        backgroundImage: `url(${header})`
    },
    button: {
        fontSize: '1rem',
        position: "absolute",
        left: 320,
        top: 450,
        width: 320,
        height: 50,
        color: "white",
        backgroundColor: "#8f3232",
        backgroundImage: 'linear-gradient(to right, #8f3232, #ac4234, #c85533, #e26a2f, #f98226);',
        '&:hover': {
            background: 'linear-gradient(45deg, #e65252 30%, #ffa35c 90%)',
        },  
    },
    paper: {
        width: 350,
        height: 100,
        position: "absolute",
        left: 305,
        top: 80,
        borderRadius: 20,
        paddingTop: 30,
    }
}));

function Header() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    < img src={siglamica} alt="siglamica" />
                </Paper>
                <Button
                    variant="contained"
                    className={classes.button}
                    endIcon={<CallIcon />}
                >
                    Contactează-ne acum!
                 </Button>
            </div>
        </div>
    );
}

export default Header;