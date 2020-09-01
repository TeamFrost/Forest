import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import StoreIcon from '@material-ui/icons/Store';

const useStyles = makeStyles((theme) => ({
    // root: {
    //   position: 'absolute',
    //   top: 70,
    //     left: 940
    // },
    button: {
        height: 60,
        margin: 3,
        padding: 15,
        borderRadius: 10,
        color: "white",
        fontSize: '1rem',
        fontWeight: 'bold',
        letterSpacing: 2,
        '&:hover': {
            backgroundColor: "#DDAC65",
            color: "black"
        },
    },
    buttonShop: {
        height: 60,
        margin: 3,
        padding: 15,
        borderRadius: 10,
        backgroundColor: "white",
        fontSize: '1rem',
        fontWeight: 'bold',
        letterSpacing: 2,
        color: "black",
        '&:hover': {
            backgroundImage: 'linear-gradient(to right, #8f3232, #ac4234, #c85533, #e26a2f, #f98226);',
            color: 'white'
        },
    }

}));

function Menu() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button size="large" className={classes.button}>Acasa </Button>
            <Button size="large" className={classes.button}>Despre Noi </Button>
            <Button size="large" className={classes.button}>Galerie Foto </Button>
            <Button size="large" className={classes.button}>Intrebari Frecvente </Button>
            <Button size="large" className={classes.button}>Contact </Button>
            <Button size="large" className={classes.buttonShop} endIcon={<StoreIcon />}>Shop </Button>

        </div>
    );

}

export default Menu;