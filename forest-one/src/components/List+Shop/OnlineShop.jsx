import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Shop from "./img/shop.png";

const useStyles = makeStyles((theme) => ({
    paper: {
        paddingTop: 350,
        width: 1050,
        height: 400,
        backgroundImage: `url(${Shop})`,
        backgroundRepeat: 'no-repeat',
    },
    text: {
        color: '#000000',
        fontSize: 35,
        letterSpacing: 1.5
    },
    button: {
        marginTop: 50,
        height: 75,
        width: 400,
        borderRadius: 15,
        color: '#DEAD67',
        borderColor: '#DEAD67',
        fontSize: 20
    },
    specialText: {
        color: '#D69943',
    }

}));

function OnlineShop() {
    const classes = useStyles();

    return (
        <div>
            <Paper elevation={0} className={classes.paper}>
                <Typography variant="h5" component={'span'} className={classes.text}>
                    <Box fontWeight="fontWeightBold" m={1}>
                        Descoperă noul nostru <span className={classes.specialText}>magazin online</span> și comandă produsele dorite direct de pe site!
                    </Box>
                </Typography>
                <Button variant="outlined" endIcon={<ArrowForwardIcon />} className={classes.button}>
                    Mergi la magazinul online
                </Button>
            </Paper>
        </div>
    );
}

export default OnlineShop;