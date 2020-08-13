import React from 'react';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import landing from "../img/landing.png";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 1920,
        height: 969,
        backgroundImage: `url(${landing})`
    }
}));

const theme = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            outlined: {
                border: '4px solid',
                borderColor: "white",
                borderRadius: 10,

            },
            root: {
                height: 135,
                width: 600,
                color: "white",
                fontSize: "2.5rem",
                fontWeight: 700,
                margin: 100,
                marginTop: 580,
                '&:hover': {
                    color: "#259821",
                    borderColor: "#259821",

                }
            }

        },
    },
});


function LandingPage() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Button variant="outlined">
                    Afla mai multe!
            </Button>
                <Button variant="outlined">
                    Comanda acum!
            </Button>
            </ThemeProvider>
        </div>
    );
}

export default LandingPage;