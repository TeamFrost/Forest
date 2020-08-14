import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import bubbles from "../img/bubbles.png";
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import HelpIcon from '@material-ui/icons/Help';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({
    paperRoot: {
        width: 1920,
        height: 964,
        backgroundImage: `url(${bubbles})`,
        backgroundRepeat: 'no-repeat',
        marginLeft: 75,
    },
    containerRoot: {
        paddingTop: 150,
    },
    listRoot: {
        width: '100%',
        maxWidth: 700,
    },
    listItem: {
        width: 600,
        height: 150,
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginRight: 15,
        backgroundColor: '#DDAC65'
      },
      icon: {
        fontSize: 50,
      }
}));

function InfoCard() {

    const classes = useStyles();

    return (
        <div>
            <Paper elevation={0} className={classes.paperRoot}>

                <Grid container spacing={5} className={classes.containerRoot}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={4}>
                        <div>
                            <List className={classes.listRoot}>
                                <ListItem className={classes.listItem}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.large} variant="square">
                                            <HelpIcon className={classes.icon}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText>
                                        <Typography variant="h5">
                                            Cine poate apela la noi?
                                        </Typography>
                                        <Typography variant="body1">
                                            Orice companie sau persoană care are nevoie de lemn pregătit pentru construit.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.large} variant="square">
                                            <PeopleAltIcon className={classes.icon}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText>
                                        <Typography variant="h5">
                                            Echipa Forest
                                        </Typography>
                                        <Typography variant="body1">
                                            Asigurăm consultanța pentru a alege lemnul potrivit fiecărui proiect.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.large} variant="square">
                                            <ScheduleIcon className={classes.icon}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText>
                                        <Typography variant="h5">
                                            Programul nostru
                                        </Typography>
                                        <Typography variant="body1">
                                            De luni până vineri de la ora 08:00-16:00, sâmbătă: 08:00-12:00
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div>
                            <List className={classes.listRoot}>
                                <ListItem className={classes.listItem}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.large} variant="square">
                                            <LocationOnIcon className={classes.icon}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText>
                                        <Typography variant="h5">
                                            Localizare Depozit
                                        </Typography>
                                        <Typography variant="body1">
                                            Str. Berarilor nr.8, Moșnița Nouă, Judeţul Timiş DJ592, km 6 Timișoara-Buziaș.
                                        </Typography>
                                    </ListItemText>
                                </ListItem >
                                <ListItem className={classes.listItem}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.large} variant="square">
                                            <LocalShippingIcon className={classes.icon}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText>
                                        <Typography variant="h5">
                                            Suport Logistic
                                        </Typography>
                                        <Typography variant="body1">
                                            Transportul în zona depozitului este asigurat.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <ListItemAvatar>
                                        <Avatar className={classes.large} variant="square">
                                            <ShoppingCartIcon className={classes.icon}/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText>
                                        <Typography variant="h5">
                                            Oferte de preț personalizate
                                        </Typography>
                                        <Typography variant="body1">
                                            Venim în sprijinul clienților noștri cu discount-uri, aplicate în funcție de cantitatea de lemn comandată.
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                </Grid>

            </Paper>
        </div>
    );

}

export default InfoCard;