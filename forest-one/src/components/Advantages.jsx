import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AdvantagesPhoto from "../img/AdvantagesPhoto.png";
import { Paper, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 1920,
        height: 775,
        backgroundImage: `url(${AdvantagesPhoto})`
    },
    paper: {
        position: 'relative',
        top: 75,
        width: '100%',
        height: 550,
        backgroundColor: "#FFFFFFDE",
        paddingTop: 50,
    },
    text: {
        paddingTop: 80,
        color: '#DDAC65',
        letterSpacing: 2,
    },
    bodyText: {
        paddingTop: 30,
    },
    grid: {
        marginTop: 30,
    },
    grid2:{
        marginTop: 45,
    }
}));

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        position: 'relative',
        left: 50,
        height: 50,
        borderRadius: 5,
        width: 780,
        marginLeft: 50,
        marginTop: 15
    },
    colorPrimary: {
        backgroundColor: '#ebcea4',
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#D69942',
        borderColor: '#D69942'
    },
}))(LinearProgress);

function Advantages() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h4" component={'span'} className={classes.text}>
                    <Box fontSize={34} fontWeight="fontWeightBold" m={1}>
                        AVANTAJELE LEMNULUI
                    </Box>
                </Typography>
                <Typography component={'span'} className={classes.bodyText}>
                    <Box fontWeight={"fontWeightLight"} fontSize={28} m={1}>
                        Lemnul aparent din cadrul unei construcții, conferă un aspect arhitectural foarte plăcut,
                    </Box>
                    <Box fontWeight={"fontWeightLight"} fontSize={28} m={1}>
                        făcând să fie folosit nu doar ca material structural, dar și ca material de finisaj.
                    </Box>
                </Typography>
                <Grid container spacing={6} className={classes.grid}>
                    <Grid container xs={12} sm={6} className={classes.grid2}>
                        <Grid item xs={12} sm={9}>
                            <Box fontWeight={"fontWeightLight"} fontSize={23}>
                                Cel mai bun material izolant natural termic și fonic &nbsp;&nbsp;&nbsp;&nbsp;
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box fontWeight={"Semi-Bold"} fontSize={23}>
                                100%
                            </Box>
                        </Grid>
                        <BorderLinearProgress variant="determinate" value={100} />
                    </Grid>
                    <Grid container xs={12} sm={6} className={classes.grid2}>
                        <Grid item xs={12} sm={9}>
                            <Box fontWeight={"fontWeightLight"} fontSize={23}>
                            Lemnul se poate prelucra și fasona relativ ușor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box fontWeight={"Semi-Bold"} fontSize={23}>
                                75%
                            </Box>
                        </Grid>
                        <BorderLinearProgress variant="determinate" value={75} />
                    </Grid>
                    <Grid container xs={12} sm={6} className={classes.grid2}>
                        <Grid item xs={12} sm={9}>
                            <Box fontWeight={"fontWeightLight"} fontSize={23}>
                            Element valoros în designul de interior și exterior &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box fontWeight={"Semi-Bold"} fontSize={23}>
                                90%
                            </Box>
                        </Grid>
                        <BorderLinearProgress variant="determinate" value={90} />
                    </Grid>
                    <Grid container xs={12} sm={6} className={classes.grid2}>
                        <Grid item xs={12} sm={9}>
                            <Box fontWeight={"fontWeightLight"} fontSize={23}>
                            Durabilitatea mare a construcțiilor din lemn&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box fontWeight={"Semi-Bold"} fontSize={23}>
                                85%
                            </Box>
                        </Grid>
                        <BorderLinearProgress variant="determinate" value={85} />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
export default Advantages;