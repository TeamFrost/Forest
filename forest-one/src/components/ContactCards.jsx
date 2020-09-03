import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import call from "../img/call.jpg";
import mail from "../img/mail.jpg";
import whatsapp from "../img/whatsapp2.jpg";
import message from "../img/message.jpg";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        marginLeft: 75,
        marginTop: 50,
    },
    card: {
        margin: 50,
        width: 345,
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    button: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: '33%'
    }
});

export default function ContactCards() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={call}
                        title="Phone"
                    />
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        TELEFON
                        </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" style={{marginBottom: 10}}>
                        Ne poți contacta la urmatoarele numere de telefon:
                        </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        0722 469 518
                        </Typography>
                    <Typography variant="body1" color="textSecondary" component="p">
                        0766 066 808
                        </Typography>
                </CardContent>

                <CardActions>
                    <Button className={classes.button}>
                        Suna acum
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={mail}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                         </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={whatsapp}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                         </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={message}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                         </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}