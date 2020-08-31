import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
    paperRoot: {
        width: 1920,
        height: 300,
        marginLeft: 75,
    },
    containerRoot: {
        paddingTop: 10,
    },
    listRoot: {
        width: '100%',
        maxWidth: 800,
    },
    listItem: {
        width: 500,
        height: 75,
    },
    icon: {
        fontSize: 60,
        color: "green",
        cursor: 'default',
        marginRight: 5
    },
    text: {
        fontSize: 25,
        fontWeight: 500,
    },

}));

function RecommandGrid() {

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
                                    <ListItemIcon>
                                        <DoneIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body1" className={classes.text}>
                                            Lemn de calitate pentru construit
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <DoneIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body1" className={classes.text}>
                                            Clienți mulțumiți
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <DoneIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body1" className={classes.text}>
                                            Consultanță de specialitate
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
                                    <ListItemIcon>
                                        <DoneIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body1" className={classes.text}>
                                            Locație accesibilă
                                        </Typography>
                                    </ListItemText>
                                </ListItem >
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <DoneIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body1" className={classes.text}>
                                            Livrare imediată
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon>
                                        <DoneIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body1" className={classes.text}>
                                            Oferte de preț personalizate
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

export default RecommandGrid;