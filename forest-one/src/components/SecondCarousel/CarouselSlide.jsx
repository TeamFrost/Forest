import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default function CarouselSlide(props) {
    const { backgroundImage } = props.content;

    const useStyles = makeStyles(() => ({
        paper1: {
            backgroundImage,
            backgroundRepeat: 'no-repeat',
            borderRadius: 5,
            marginLeft: '50px',
            marginRight: '50px',
            height: '300px',
            width: '300px',
            display: 'flex',
            justifyContent: 'center',
        },
        paper2: {
            backgroundImage,
            backgroundRepeat: 'no-repeat',
            borderRadius: 5,
            marginLeft: '50px',
            marginRight: '50px',
            height: '300px',
            width: '300px',
            display: 'flex',
            justifyContent: 'center',
        },
        paper3: {
            backgroundImage,
            backgroundRepeat: 'no-repeat',
            borderRadius: 5,
            marginLeft: '50px',
            marginRight: '50px',
            height: '300px',
            width: '300px',
            display: 'flex',
            justifyContent: 'center',
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={25}>
                <Grid item xs={4}>
                    <Paper className={classes.paper1}></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper2}></Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper3}></Paper>
                </Grid>
            </Grid>
        </div>
    );
}