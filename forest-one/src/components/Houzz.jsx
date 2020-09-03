import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 150,
        marginRight: 150,
        paddingBottom: 25,
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
        color: '#DEAD67',
        fontWeight: "bold",
    },
    houzz: {
        width: '300px',
        textAlign: "center",
        fontSize: '12px',
        marginLeft: 150,
    },
    houzzDisplay: {
        display: 'flex',
        marginTop: 10
    },
    button: {
        marginTop: 50,
        height: 50,
        width: 400,
        borderRadius: 10,
        color: '#259821',
        borderColor: '#259821',
        fontSize: 20
    },
}));


function Houzz() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.root}>
                <Typography variant="h5" component={'span'} className={classes.headingText}>
                    <Box fontWeight="fontWeightBold" m={1}>
                        IDEI DE AMENAJĂRI
                </Box>
                </Typography>
                <Typography className={classes.bodyText}>
                    <Box fontWeight={"fontWeightLight"} component={'span'} m={1}>
                        Când <span className={classes.specialText}>LEMNUL</span> intră pe scena unei amenjări de calitate, se produc efecte arhitecturale de excepție, efecte ce nici un alt element decorativ nu le poate reproduce:
            </Box>

                </Typography>
            </div>
            <div className={classes.houzzDisplay}>
                <div id="hzroot9671588" className={classes.houzz}>
                    <div style={{ fontSize: '14px', marginBottom: '3px' }}></div>
                    <div style={{ padding: 0, margin: 0, border: 0, marginBottom: '3px' }}>
                        <iframe title="frame1" data-hzvt="MjAyMDA4MzE6NDI5MzpidXR0b25zQW5kQmFkZ2Vz" name="HouzzWidget3971775" id="HouzzWidget3971775" style={{ border: 0, width: '300px', height: '275px', frameBorder: "0"}} scrolling="NO" src="https://www.houzz.com/jsGalleryWidget/query/wood/new_window=yes/title_on=yes/width=300"></iframe>
                    </div>
                </div >
                <div id="hzroot9671588" className={classes.houzz}>
                    <div style={{ fontSize: '14px', marginBottom: '3px' }}></div>
                    <div style={{ padding: 0, margin: 0, border: 0, marginBottom: '3px' }}>
                        <iframe title="frame2" data-hzvt="MjAyMDA4MzE6NDI5MzpidXR0b25zQW5kQmFkZ2Vz" name="HouzzWidget3971775" id="HouzzWidget3971775" style={{ border: 0, width: '300px', height: '275px', frameBorder: "0"}} scrolling="NO" src="https://www.houzz.com/jsGalleryWidget/query/wood%20%20floor/new_window=yes/title_on=yes/width=300"></iframe>
                    </div>
                </div >
                <div id="hzroot9671588" className={classes.houzz}>
                    <div style={{ fontSize: '14px', marginBottom: '3px' }}></div>
                    <div style={{ padding: 0, margin: 0, border: 0, marginBottom: '3px' }}>
                        <iframe title="frame3" data-hzvt="MjAyMDA4MzE6NDI5MzpidXR0b25zQW5kQmFkZ2Vz" name="HouzzWidget3971775" id="HouzzWidget3971775" style={{ border: 0, width: '300px', height: '275px', frameBorder: "0"}} scrolling="NO" src="https://www.houzz.com/jsGalleryWidget/query/wood%20%20paneling/new_window=yes/title_on=yes/width=300"></iframe>
                    </div>
                </div >
                <div id="hzroot9671588" className={classes.houzz}>
                    <div style={{ fontSize: '14px', marginBottom: '3px' }}></div>
                    <div style={{ padding: 0, margin: 0, border: 0, marginBottom: '3px' }}>
                        <iframe title="frame4" data-hzvt="MjAyMDA4MzE6NDI5MzpidXR0b25zQW5kQmFkZ2Vz" name="HouzzWidget3971775" id="HouzzWidget3971775" style={{ border: 0, width: '300px', height: '275px', frameBorder: "0"}} scrolling="NO" src="https://www.houzz.com/jsGalleryWidget/query/wood%20%20stairs/new_window=yes/title_on=yes/width=300"></iframe>
                    </div>
                </div >
            </div>
            <div className={classes.houzzDisplay}>
                <div id="hzroot9671588" className={classes.houzz}>
                    <div style={{ fontSize: '14px', marginBottom: '3px' }}></div>
                    <div style={{ padding: 0, margin: 0, border: 0, marginBottom: '3px' }}>
                        <iframe title="frame1" data-hzvt="MjAyMDA4MzE6NDI5MzpidXR0b25zQW5kQmFkZ2Vz" name="HouzzWidget3971775" id="HouzzWidget3971775" style={{ border: 0, width: '300px', height: '275px', frameBorder: "0"}} scrolling="NO" src="https://www.houzz.com/jsGalleryWidget/query/wood%20%20beam/new_window=yes/title_on=yes/width=300"></iframe>
                    </div>
                </div >
                <div id="hzroot9671588" className={classes.houzz}>
                    <div style={{ fontSize: '14px', marginBottom: '3px' }}></div>
                    <div style={{ padding: 0, margin: 0, border: 0, marginBottom: '3px' }}>
                        <iframe title="frame2" data-hzvt="MjAyMDA4MzE6NDI5MzpidXR0b25zQW5kQmFkZ2Vz" name="HouzzWidget3971775" id="HouzzWidget3971775" style={{ border: 0, width: '300px', height: '275px', frameBorder: "0"}} scrolling="NO" src="https://www.houzz.com/jsGalleryWidget/query/wood%20%20fence/new_window=yes/title_on=yes/width=300"></iframe>
                    </div>
                </div >
                <div id="hzroot9671588" className={classes.houzz}>
                    <div style={{ fontSize: '14px', marginBottom: '3px' }}></div>
                    <div style={{ padding: 0, margin: 0, border: 0, marginBottom: '3px' }}>
                        <iframe title="frame3" data-hzvt="MjAyMDA4MzE6NDI5MzpidXR0b25zQW5kQmFkZ2Vz" name="HouzzWidget3971775" id="HouzzWidget3971775" style={{ border: 0, width: '300px', height: '275px', frameBorder: "0"}} scrolling="NO" src="https://www.houzz.com/jsGalleryWidget/query/exterior%20%20wood/new_window=yes/title_on=yes/width=300"></iframe>
                    </div>
                </div >
                <div id="hzroot9671588" className={classes.houzz}>
                    <div style={{ fontSize: '14px', marginBottom: '3px' }}></div>
                    <div style={{ padding: 0, margin: 0, border: 0, marginBottom: '3px' }}>
                        <iframe title="frame4" data-hzvt="MjAyMDA4MzE6NDI5MzpidXR0b25zQW5kQmFkZ2Vz" name="HouzzWidget3971775" id="HouzzWidget3971775" style={{ border: 0, width: '300px', height: '275px', frameBorder: "0" }} scrolling="NO" src="https://www.houzz.com/jsGalleryWidget/query/wood%20%20attic/new_window=yes/title_on=yes/width=300"></iframe>
                    </div>
                </div >
            </div>
            <Button href="https://www.houzz.com/professionals/home-builders/forest-one-pfvwus-pf~1511217594?" target="_blank" rel="noopener noreferrer" variant="outlined" endIcon={<ArrowForwardIcon />} className={classes.button}>
                Forest One Houzz
            </Button>

        </div>

    );
}

export default Houzz;