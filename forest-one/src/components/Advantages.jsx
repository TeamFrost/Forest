import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AdvantagesPhoto from "../img/AdvantagesPhoto.png";
import { Paper, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 1920,
        height: 800,
        backgroundImage: `url(${AdvantagesPhoto})`
    },
    paper: {
        position: 'relative',
        top: 75,
        width: '100%',
        height: 650,
        backgroundColor: "#FFFFFFE6"
    },
    text: {
        paddingTop: 80,
        color: '#DDAC65',
        letterSpacing: 2,
    },
    bodyText: {
        paddingTop: 30,
    }
}));

function Advantages() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h4" className={classes.text}>
                    <Box fontSize={34} fontWeight="fontWeightBold" m={1}>
                        AVANTAJELE LEMNULUI
                    </Box>
                </Typography>
                <Typography className={classes.bodyText}>
                    <Box fontWeight={"fontWeightLight"} fontSize={28} m={1}>
                        Lemnul aparent din cadrul unei construcții, conferă un aspect arhitectural foarte plăcut,
                    </Box>
                    <Box fontWeight={"fontWeightLight"} fontSize={28} m={1}>
                        făcând să fie folosit nu doar ca material structural, dar și ca material de finisaj.
                    </Box>
                </Typography>
            </Paper>
        </div>
    );
}
export default Advantages;