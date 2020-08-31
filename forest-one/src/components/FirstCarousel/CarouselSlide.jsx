import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';

export default function CarouselSlide(props) {
    const { backgroundImage } = props.content;

    const useStyles = makeStyles(() => ({
        paper: {
            backgroundImage,
            backgroundRepeat: 'no-repeat',
            borderRadius: 5,
            margin: '0px 25px',
            height: '735px',
            width: '1400px',
            display: 'flex',
            justifyContent: 'center',
        }
    }));

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
        </Paper>
    );
}