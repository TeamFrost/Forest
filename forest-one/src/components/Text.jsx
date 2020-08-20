import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 150,
        marginRight: 150,
        paddingBottom: 75
    },
    bodyText: {
        marginLeft: 150,
        marginRight: 150
    }
}));

function Text() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h5" className={classes.headingText}>
                <Box fontWeight="fontWeightBold" m={1}>
                    LEMN PREGATIT PENTRU CONSTRUIT
                </Box>
            </Typography>
            <hr />
            <Typography className={classes.bodyText}>
            <Box fontWeight={"fontWeightLight"} fontSize={18} m={1}>
                Depozitul Forest ONE are în permanență lemn pregătit pentru construit: brut, finit și semifabricat. Astfel, oferta noastra cuprinde: cherestea verde sau uscată nerindeluită, grinzi rășinoase, produse din lemn finite și semifabricate - lambriuri, scânduri de gard, podele, tavane din lemn, etc.
            </Box>
                
            </Typography>
        </div>
    );
}

export default Text;
