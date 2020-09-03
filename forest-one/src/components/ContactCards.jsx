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
        marginLeft: 150,
        marginTop: 50,
    },
    card: {
        margin: 25,
        width: 345,
        maxWidth: 345,
        height: 500

    },
    media: {
        height: 260,
    },
    content: {
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        width: 345,
        height: 150,
    },
    button: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20,
        position: 'relative', left: '50%', top: '50%',
        transform: 'translate(-50%, 10%)'
    },
    text: {
        marginBottom: 10,
    },
    info: {
        fontWeight: 'semi-bold'
    },
    link: {
        color: 'black'
    }
});

export default function ContactCards() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* Phone card */}
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={call}
                        title="Phone"
                    />
                </CardActionArea>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        TELEFON
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" className={classes.text}>
                        Ne puteți contacta la urmatoarele numere de telefon:
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p" className={classes.info}>
                        0722 469 518
                        </Typography>
                    <Typography variant="body1" color="textPrimary" component="p" className={classes.info}>
                        0766 066 808
                        </Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.button} >
                        Sună acum
                    </Button>
                </CardActions>
            </Card>

            {/* Mail card */}
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={mail}
                        title="Mail"
                    />
                </CardActionArea>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        MAIL
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" className={classes.text}>
                        Puteți scrie un email la adresa:
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p" className={classes.info}>
                        office@forestone.ro
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.button} >
                        Trimite mail
                    </Button>
                </CardActions>
            </Card>

            {/* Whatsapp card */}
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={whatsapp}
                        title="Whatsapp"
                    />
                </CardActionArea>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        WHATSAPP
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" className={classes.text}>
                        Cereți o ofertă personalizată pe WhatsApp la numărul:
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p" className={classes.info}>
                        0722 469 518
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.button}>
                        Cere ofertă
                    </Button>
                </CardActions>
            </Card>

            {/* Messenger card */}
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={message}
                        title="Message"
                    />
                </CardActionArea>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        MESAJ
                    </Typography>
                    <Typography variant="body1" color="textSecondary" component="p" className={classes.text}>
                        Ne puteți contacta pe Facebook, pe pagina noastră:
                    </Typography>
                    <Typography variant="body1" color="textPrimary" component="p" className={classes.info}>
                    <a href="https://www.facebook.com/vreaulemn" target="_blank" rel="noopener noreferrer" className={classes.link}>ForestOne</a>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.button}>
                        Scrie un mesaj
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}