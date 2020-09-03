import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import footer from "../img/footer.png";
import { Paper, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Facebook from "../img/facebook.svg";
import Youtube from "../img/youtube.svg";
import Blogger from "../img/blogger.svg";
import Location from "../img/social-media.svg";
import Whatsapp from "../img/whatsapp.svg";
import Houzz from "../img/houzz.svg";
import Copyright from '../helpers/Copyright';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 1920,
        height: 418,
        backgroundImage: `url(${footer})`
    },
    paper: {
        position: 'relative',
        top: 75,
        width: '60%',
        backgroundColor: 'rgb(49 126 46)',
        color: 'white'
    },
    paper2: {
        position: 'relative',
        top: 103,
        width: '60%',
        backgroundColor: 'rgb(49 126 46)',
        color: 'white'
    },
    paper3: {
        position: 'relative',
        top: 50,
        left: 1450,
        backgroundColor: 'rgb(49 126 46)',
        width: '25%',
    },
    paperCopy:{
        position: 'relative',
        top: 40,
        left:1100,
        width: '15%',
        color: 'white'
    },
    icon: {
        fontSize: 90,
        marginTop: 15,
        cursor: 'default',
    },
    list: {
        paddingBottom: 1,
        marginLeft: 2,
    },
    info: {
        textAlign: 'center',
        color: '#E59E39',
        fontWeight: "semi-bold",
        fontSize: 20
    },
    info2: {
        fontSize: 20,
        fontWeight: "semi-bold",
    },
    info3: {
        textAlign: 'center',
        color: '#E59E39',
        fontWeight: "semi-bold",
        fontSize: 17,
        paddingTop: 5
    },
    specialText: {
        color: 'white',
    },
    icons: {
        width: 40,
        marginLeft: 15,
        cursor: 'pointer'
    }
}));

function Footer() {

    const classes = useStyles();

    return (

        <div className={classes.root}>
            <Paper elevation={0} className={classes.paper}>
                <Grid container spacing={3} >
                    <Grid item xs={12} sm={2}></Grid>
                    <Grid item xs={12} sm={1}><PhoneOutlinedIcon className={classes.icon} /></Grid>
                    <Grid item xs={12} sm={3}>
                        <List className={classes.list}>
                            <ListItem className={classes.info2}>Informații și comenzi</ListItem>
                            <ListItem button className={classes.info}>0722 469 518</ListItem>
                            <ListItem button className={classes.info}>0766 066 808</ListItem>

                        </List>
                    </Grid>
                    <Grid item xs={12} sm={1}><MailOutlineIcon className={classes.icon} /></Grid>
                    <Grid item xs={12} sm={3}>
                        <List className={classes.list}>
                            <ListItem className={classes.info2}>Adresa de email</ListItem>
                            <ListItem button className={classes.info}>office@forestone.ro</ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={0} className={classes.paper2}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={2}></Grid>
                    <Grid item xs={12} sm={1}><AccessTimeIcon className={classes.icon} /></Grid>
                    <Grid item xs={12} sm={3}>
                        <List className={classes.list}>
                            <ListItem className={classes.info2}>Program</ListItem>
                            <ListItem className={classes.info3}>Luni-Vineri: &nbsp;<span className={classes.specialText}>08:00-16:00</span></ListItem>
                            <ListItem className={classes.info3}>Sâmbătă:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={classes.specialText}>08:00-12:00</span></ListItem>
                            <ListItem className={classes.info3}>Duminică: &nbsp;&nbsp;&nbsp;<span className={classes.specialText}>Închis</span></ListItem>

                        </List>
                    </Grid>
                    <Grid item xs={12} sm={1}><LocationOnIcon className={classes.icon} /></Grid>
                    <Grid item xs={12} sm={3}>
                        <List className={classes.list}>
                            <ListItem className={classes.info2}>Locație FOREST ONE</ListItem>
                            <ListItem className={classes.info3}>Str. Berarilor nr. 8, 307285</ListItem>
                            <ListItem className={classes.info3}>Moșnița Nouă, Judeţul Timiş</ListItem>
                            <ListItem className={classes.info3}>DJ592, km 6 Timișoara-Buziaș</ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={0} className={classes.paper3}>
                <img src={Facebook} className={classes.icons} onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.facebook.com/vreaulemn/");
                }} />
                 <img src={Youtube} className={classes.icons} onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.youtube.com/channel/UCy3UnLiHkerLlaVsm_pwwrg");
                }} />
                <img src={Location} className={classes.icons} onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.google.com/maps/@45.7234705,21.2963809,3a,75y,144.71h,89.09t/data=!3m6!1e1!3m4!1sW_1J7EpjBjc1fIDaB1hz7Q!2e0!7i13312!8i6656?hl=en-US");
                }} />
                <img src={Whatsapp} className={classes.icons} onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.google.com");
                }} />
                 <img src={Blogger} className={classes.icons} onClick={(e) => {
                    e.preventDefault();
                    window.open("http://vreaulemn.blogspot.com/p/lemnul-de-constructii-1.html");
                }} />
                <img src={Houzz} className={classes.icons} onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.houzz.com/professionals/home-builders/forest-one-pfvwus-pf~1511217594?");
                }} />
            </Paper>
            <div className={classes.paperCopy}>
                <Copyright />
            </div>
        </div>
    );
}

export default Footer;