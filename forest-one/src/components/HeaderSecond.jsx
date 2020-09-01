import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import header2 from "../img/header2.png";
import siglamica from "../img/siglamica.png";
import { Paper } from '@material-ui/core';
import Menu from "./Menu";


const useStyles = makeStyles((theme) => ({
    root: {
        width: 1920,
        height: 186,
        backgroundImage: `url(${header2})`
    },
    paper: {
        width: 350,
        height: 70,
        position: "absolute",
        left: 205,
        top: 30,
        borderRadius: 20,
        paddingTop: 10,
        paddingBottom: 10,
    },
}));

function HeaderSecond() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    < img src={siglamica} alt="siglamica" />
                </Paper>
                <div style={{position: 'absolute', top: 50, left:940}}>
                <Menu/>
                </div>
            </div>
        </div>



    );
}

export default HeaderSecond;