import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import footer from "../img/footer.png";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 1920,
        height: 412,
        backgroundImage: `url(${footer})`
    },
}));
function Footer() {

    const classes = useStyles();

    return (

        <div className={classes.root}>

        </div>
    );
}

export default Footer;