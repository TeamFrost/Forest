import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import RecommandGrid from "../components/RecommandGrid";
import AboutUsPhoto from "../img/AboutUsPhoto.png"
import Footer from '../components/Footer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const useStyles = makeStyles(() => ({
    text1: {
        margin: 175,
        marginBottom: 50,
        marginTop: 70
    },
    headingText1: {
        fontSize: 30,
    },
    bodyText1: {
        fontSize: 20,
        lineHeight: 1.7
    },
    specialText: {
        color: '#347D32',
        fontWeight: 'bold'
    },
    headingText2: {
        color: '#D69942',
        fontSize: 30
    },
    paper: {
        height: 900,
        width: 1400,
        backgroundImage: `url(${AboutUsPhoto})`,
        backgroundRepeat: 'no-repeat',
        marginLeft: 300
    },
    text3: {
        margin: 175,
        marginTop: 50,
        marginBottom: 80,
    },
    headingText3: {
        fontSize: 30,
    },
    bodyText3: {
        fontSize: 20,
        display: 'wrap',
        marginTop: 20,
        textAlign: 'justify',
        lineHeight: 1.7
    },
    link: {
        color: 'green',
        fontStyle: 'italic',
    },
    icon: {
        fontSize: 20,
        color: '#2A530B',
        cursor: 'default',
    },
    text: {
        fontSize: 18
    }

}));

function AboutUsPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.text1}>
                <Typography variant="h4" component={'span'} className={classes.headingText1}>
                    <Box fontWeight="fontWeightBold" m={2}>
                        POVESTEA NOASTRĂ
                    </Box>
                </Typography>
                <Typography className={classes.bodyText1}>
                    <Box fontWeight={"fontWeightLight"} component={'span'} m={2}>
                        Acum mai bine de 15 ani, preocuparea noastră pentru produsele lemnoase de calitate ne-a determinat să pornim, pe plan local, o afacere de familie. În timp, pas cu pas, am crescut datorită încrederii și aprecierii clienților noștri. <span className={classes.specialText}>În prezent, la Depozitul Forest ONE, avem o gamă largă de material lemnos pentru construcții.</span> Oferim consultanță și asistență pentru alegerea lemnului potrivit fiecărui proiect. Suntem focusați să mărim în permanență gama de produse lemnoase comercializate în depozitul Forest ONE, pentru a răspunde prompt nevoilor clienților noștri.
                    </Box>
                </Typography>
                <hr style={{ marginTop: 20 }} />
            </div>
            <div className={classes.text2}>
                <Typography component={'span'} className={classes.headingText2}>
                    <Box fontWeight="fontWeightLight" m={2}>
                        Ce ne recomandă:
                    </Box>
                </Typography>
                <RecommandGrid />
            </div>
            <div>
                <Paper elevation={0} className={classes.paper}>

                </Paper>
            </div>
            <div className={classes.text3}>
                <Typography variant="h4" component={'span'} className={classes.headingText3}>
                    <Box fontWeight="fontWeightBold" m={2}>
                        DESPRE LEMN
                    </Box>
                </Typography>
                <Typography className={classes.bodyText3}>
                    <Box fontWeight={"fontWeightLight"} component={'span'} m={2}>
                        Lemn: poate fi considerat primul material de construcție din preistorie și până astăzi. Acest material a fost utilizat constant, în cele mai variate moduri, în alcătuiri constructive cu sau fără rol structural. Acest fapt se datorează atât rânduirii lemnului, sub forma unor specii diverse, în toată lumea, cât și lucrabilității sale. Datorită greutății reduse și bunelor sale caracteristici mecanice.
                    </Box>
                </Typography>
                <Typography className={classes.bodyText3}>
                    <Box fontWeight={"fontWeightLight"} component={'span'} m={2}>
                        Cu toate acestea, puține sunt mărturiile unor realizări foarte vechi din acest nobil material și, în orice caz, mult mai puține decât cele din piatră. Este caracterizat de o perisabilitate crescută legată de factori multiplii, și nu în ultimul rând de bine cunoscuta sa vulnerabilitate la foc. Totuși poate fi cu ușurință constatată și astăzi o largă utilizare în timp a planșeelor din lemn, în special în zonele rurale și în vecinătatea pădurilor. Succesul și răspândirea planșeelor din lemn, ca și a șarpantelor din lemn, este justificat de posibilitatea acoperirii unor deschideri destul de mari cu structuri ușoare. Menționăm costuri reduse pentru că nu mai sunt necesari pereți perimetrali masivi ca în cazul bolților din zidărie. Mai multe detalii pe blogul nostru: <a href="http://vreaulemn.blogspot.com/p/lemnul-de-constructii-1.html" target="_blank" rel="noopener noreferrer" className={classes.link}>http://vreaulemn.blogspot.com/p/lemnul-de-constructii-1.html</a>
                    </Box>
                </Typography>
                <Typography className={classes.bodyText3}>
                    <Box fontWeight={"fontWeightLight"} component={'span'} m={2}>
                        Depozitul nostru din Timișoara – Moșnita Nouă, DJ592, km 6 Timișoara-Buziaș comercializeaza toată gama de material lemnos pentru constructii:
                    </Box>
                </Typography>
                <List className={classes.listRoot}>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon style={{ minWidth: 30 }}>
                            <FiberManualRecordIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="body1" className={classes.text}>
                                Grinzi: stâlpi, căpriori, corni, coșoroabă, pană de coamă
                            </Typography>
                        </ListItemText>
                    </ListItem >
                    <ListItem className={classes.listItem}>
                        <ListItemIcon style={{ minWidth: 30 }}>
                            <FiberManualRecordIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="body1" className={classes.text}>
                                Cherestea: dulapi, scândură, lațuri, mărginare, lăteți, șipci
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemIcon style={{ minWidth: 30 }}>
                            <FiberManualRecordIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography variant="body1" className={classes.text}>
                                Produse prelucrate: lambriuri, scânduri de gard, podele, dușumea, tavane, plăci aglomerate.
                        </Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUsPage;