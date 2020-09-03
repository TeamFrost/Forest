import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import tree from "../img/tree.png";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        marginLeft: 175,
        marginBottom: 75,
        marginTop: 50
    },
    paper: {
        width: 295,
        height: 400,
        marginRight: 50,
        padding: 25,
        backgroundImage: `url(${tree})`,
    },
    frame: {
        width: 1140,
        height: 450,
        frameBorder: 0,
        border: 0,
        ariaHidden: "false",
        tabindex: 0
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'green',
        fontSize: 26
    },
    text1:{
        marginTop: 15,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    text2:{
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '200'
    }
});

function StreetView() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={2} className={classes.paper}>
                <Typography className={classes.text}>
                    SC FOREST ONE SRL
                </Typography>
                <Typography className={classes.text1}>
                    Depozit Moșnița Nouă
                </Typography>
                <Typography className={classes.text2}>
                    Str. Berarilor nr.8, 307285
                    Moșnița Nouă, Judeţul Timiş
                    DJ592, km 6
                </Typography>
                <Typography className={classes.text2}>
                    Timișoara-Buziaș
                </Typography>
                <Typography className={classes.text1}>
                    Program:
                </Typography>
                <Typography className={classes.text2}>
                    Luni - Vineri: 08:00 - 16:00
                </Typography>
                <Typography className={classes.text2}>
                    Sâmbătă: 08:00 - 12:00
                </Typography>
            </Paper>
            <iframe src="https://www.google.com/maps/embed?pb=!4v1599137183145!6m8!1m7!1slVZ9jeKuIQ7K3k1LZGA_bw!2m2!1d45.72350087330756!2d21.29639021330168!3f151.10490715589415!4f2.3049865360706576!5f1.0193423409576279" className={classes.frame}></iframe>
        </div>
    );
}

export default StreetView;