import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import bulletTree from "./img/bullet-tree.png";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginRight: 100,
        padding: 15,
        width: 400,
        height: 600,
        borderColor: "#2A530B",
        border: '3px solid',
    },
    text: {
        color: '#259821',
        marginBottom: 15,
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: 15,
    },
    list: {
        marginLeft: 50

    },
    listItem: {
    }
}));

function TableList() {

    const classes = useStyles();

    return (
        <div>
            <Paper variant="outlined" className={classes.paper}>
                <Typography variant="h4" component={'span'} className={classes.text}>
                    <Box fontWeight="fontWeightBold" m={1}>
                        LEMN IEFTIN!
                    </Box>
                </Typography>
                <List className={classes.list}>
                    <ListItem className={classes.listItem}>
                        <ListItemAvatar>
                            <Avatar
                                variant="square"
                                src={bulletTree}
                                className={classes.large}
                            />
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography variant="body1" component={'span'} className={classes.listItem}>
                                <Box fontWeight="fontWeightBold" m={1}>
                                    SCÂNDURĂ/DULAP VRAC
                                </Box>
                            </Typography>
                        </ListItemText>
                    </ListItem>

                    <ListItem className={classes.listItem}>
                        <ListItemAvatar>
                            <Avatar
                                variant="square"
                                src={bulletTree}
                                className={classes.large}
                            />
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography variant="body1" component={'span'}>
                                <Box fontWeight="fontWeightBold" m={1}>
                                    SCÂNDURĂ DIMENSIONATĂ
                                </Box>

                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemAvatar>
                            <Avatar
                                variant="square"
                                src={bulletTree}
                                className={classes.large}
                            />
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography variant="body1" component={'span'}>
                                <Box fontWeight="fontWeightBold" m={1}>
                                    DULAPI DIMENSIONAȚI
                                </Box>

                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemAvatar>
                            <Avatar
                                variant="square"
                                src={bulletTree}
                                className={classes.large}
                            />
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography variant="body1" component={'span'}>
                                <Box fontWeight="fontWeightBold" m={1}>
                                    LĂTEȚI, RIGLE
                                </Box>

                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemAvatar>
                            <Avatar
                                variant="square"
                                src={bulletTree}
                                className={classes.large}
                            />
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography variant="body1" component={'span'}>
                                <Box fontWeight="fontWeightBold" m={1}>
                                    PAZIE, GRINZI
                                </Box>

                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemAvatar>
                            <Avatar
                                variant="square"
                                src={bulletTree}
                                className={classes.large}
                            />
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography variant="body1" component={'span'}>
                                <Box fontWeight="fontWeightBold" m={1}>
                                    GARD, LAMBRIURI
                                </Box>

                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemAvatar>
                            <Avatar
                                variant="square"
                                src={bulletTree}
                                className={classes.large}
                            />
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography variant="body1" component={'span'}>
                                <Box fontWeight="fontWeightBold" m={1}>
                                    PLĂCI OSB 3
                                </Box>

                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <ListItem className={classes.listItem}>
                        <ListItemAvatar>
                            <Avatar
                                variant="square"
                                src={bulletTree}
                                className={classes.large}
                            />
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography variant="body1" component={'span'}>
                                <Box fontWeight="fontWeightBold" m={1}>
                                    PRODUSE FINISATE
                                </Box>

                            </Typography>
                        </ListItemText>
                    </ListItem>

                </List>
            </Paper>
        </div>
    );
}

export default TableList;