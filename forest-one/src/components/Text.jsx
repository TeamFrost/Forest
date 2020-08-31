import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 150,
        marginRight: 150,
        paddingBottom: 100,
        paddingTop: 50,
    },
    headingText: {
        fontSize: 30,
    },
    bodyText: {
        marginLeft: 250,
        marginRight: 250,
        fontSize: 20
    },
    specialText: {
        color: '#2A530B',
        fontWeight: "bold",
        fontSize: 25,
    }
}));

function Text() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" component={'span'} className={classes.headingText}>
                <Box fontWeight="fontWeightBold" m={1}>
                    LEMN PREGATIT PENTRU CONSTRUIT
                </Box>
            </Typography>
            <hr />
            <Typography className={classes.bodyText}>
                <Box fontWeight={"fontWeightLight"} component={'span'} m={1}>
                    Depozitul <span className={classes.specialText}>Forest ONE</span> are în permanență lemn pregătit pentru construit: brut, finit și semifabricat. Astfel, oferta noastra cuprinde: cherestea verde sau uscată nerindeluită, grinzi rășinoase, produse din lemn finite și semifabricate - lambriuri, scânduri de gard, podele, tavane din lemn, etc.
            </Box>

            </Typography>
        </div>
    );
}

export default Text;
