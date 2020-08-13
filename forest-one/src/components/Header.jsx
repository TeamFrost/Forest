import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import header from "../img/header.png";
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 1920,
        height: 680,
        backgroundImage: `url(${header})`
    },
    button: {
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
        }
    }
}));

function Header() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button
                variant="contained"
                className={classes.button}
                endIcon={<CallIcon />}
            >
                Contacteaza-ne acum
      </Button>
        </div>
    );
}

export default Header;