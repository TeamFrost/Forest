import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginLeft: -25,
        marginBottom: 50
    },
    frame: {
        width: 1535,
        height: 600, 
        frameBorder: 0,
        border: 0,
        ariaHidden: "false",
        tabindex: 0
    }
});


function Map(){

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.391729620956!2d21.294792715825768!3d45.72323832414172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455e4a6e410029%3A0x3e2cf65705468fa6!2sForest%20One!5e0!3m2!1sro!2sro!4v1599133314574!5m2!1sro!2sro" className={classes.frame}></iframe>
        </div>
    );
}

export default Map;