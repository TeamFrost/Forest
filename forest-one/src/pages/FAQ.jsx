import React from "react";
import { Typography, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Footer from '../components/Footer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import faq from "../img/faq.jpg";
import headerCrop from "../img/headerCrop.png"

const useStyles = makeStyles(() => ({
    paper: {
        width: 1920,
        height: 500,
        backgroundImage: `url(${faq})`,
        // paddingTop: 125,
        paddingBottom: 25,
        marginBottom: 50,
    },
    list: {
        marginLeft: 300,
        marginRight: 250,
        marginBottom: 100
    },
    headingText: {
        fontSize: 70,
        color: 'white',
        letterSpacing: '4px',
    },
    questionText: {
        fontSize: 22
    },
    answerText: {
        fontSize: 20,
    },
    icon: {
        fontSize: 40,
        color: '#2A530B',
        cursor: 'default',
    },


}));

function FAQ() {

    const classes = useStyles();

    return (
        <div>

            <Paper className={classes.paper}>
                <img src={headerCrop} style={{ marginBottom: 50 }} />
                <Typography variant="h4" component={'span'} className={classes.headingText}>
                    <Box fontWeight="fontWeightBold" m={2}>
                        ÎNTREBĂRI FRECVENTE
                    </Box>
                </Typography>
            </Paper>
            <List className={classes.list}>
                <ListItem className={classes.listItem}>
                    <ListItemText>
                        <Typography variant="h6" component={'span'} className={classes.questionText}>
                            <Box fontWeight="fontWeightBold" m={2}>
                                1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?
                            </Box>
                        </Typography>
                    </ListItemText>
                </ListItem >
                <ListItem className={classes.listItem} divider='true'>
                    <ListItemIcon >
                        <QuestionAnswerIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText >
                        <Typography variant="body1" className={classes.answerText} >
                            Semper risus in hendrerit gravida rutrum quisque non tellus. Non curabitur gravida arcu ac tortor dignissim convallis aenean.
                        </Typography>
                    </ListItemText>
                </ListItem >
                <ListItem className={classes.listItem}>
                    <ListItemText>
                        <Typography variant="h6" component={'span'} className={classes.questionText}>
                            <Box fontWeight="fontWeightBold" m={2}>
                                2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?
                            </Box>
                        </Typography>
                    </ListItemText>
                </ListItem >
                <ListItem className={classes.listItem} divider='true'>
                    <ListItemIcon >
                        <QuestionAnswerIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" className={classes.answerText}>
                            Semper risus in hendrerit gravida rutrum quisque non tellus. Non curabitur gravida arcu ac tortor dignissim convallis aenean.
                        </Typography>
                    </ListItemText>
                </ListItem >
                <ListItem className={classes.listItem}> 
                    <ListItemText>
                        <Typography variant="h6" component={'span'} className={classes.questionText}>
                            <Box fontWeight="fontWeightBold" m={2}>
                                3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?
                            </Box>
                        </Typography>
                    </ListItemText>
                </ListItem >
                <ListItem className={classes.listItem} divider='true'>
                    <ListItemIcon >
                        <QuestionAnswerIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" className={classes.answerText}>
                            Semper risus in hendrerit gravida rutrum quisque non tellus. Non curabitur gravida arcu ac tortor dignissim convallis aenean.
                        </Typography>
                    </ListItemText>
                </ListItem >
                <ListItem className={classes.listItem}>
                    <ListItemText>
                        <Typography variant="h6" component={'span'} className={classes.questionText}>
                            <Box fontWeight="fontWeightBold" m={2}>
                                4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?
                            </Box>
                        </Typography>
                    </ListItemText>
                </ListItem >
                <ListItem className={classes.listItem} divider='true'>
                    <ListItemIcon >
                        <QuestionAnswerIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography variant="body1" className={classes.answerText}>
                            Semper risus in hendrerit gravida rutrum quisque non tellus. Non curabitur gravida arcu ac tortor dignissim convallis aenean.
                        </Typography>
                    </ListItemText>
                </ListItem >
            </List>
            <Footer />
        </div>
    );
}

export default FAQ;
