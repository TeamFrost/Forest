import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images1 = [
    {
        url: require('../img/photoButton1.png'),
        title: 'Produse finisate',
        width: '25%',
    },
    {
        url: require('../img/photoButton2.png'),
        title: 'Scândură',
        width: '25%',
    },
    {
        url: require('../img/photoButton3.png'),
        title: 'Gard',
        width: '25%',
    },
    {
        url: require('../img/photoButton4.png'),
        title: 'Lambriu',
        width: '25%',
    },
];

const images2 = [
    {
        url: require('../img/photoButton3.png'),
        title: 'Gard',
        width: '25%',
    },
    {
        url: require('../img/photoButton4.png'),
        title: 'Lambriu',
        width: '25%',
    },
    {
        url: require('../img/photoButton1.png'),
        title: 'Produse finisate',
        width: '25%',
    },
    {
        url: require('../img/photoButton2.png'),
        title: 'Scândură',
        width: '25%',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 100,
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 500,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 300,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        fontSize: 20,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

export default function PhotoButtons() {
    const classes = useStyles();
    
    const [imageSet, setImageSet] = useState(images1);
    const [flag, setFlag] = useState(true);
    const [timeoutFlag, setTimeoutFlag] = useState(true);

    useEffect(() => {
        flag ? setImageSet(images2) : setImageSet(images1);
        setFlag(!flag);
    }, [timeoutFlag]);

    setTimeout(() => {
        setTimeoutFlag(!timeoutFlag);
    }, 6000);

    return (
        <div className={classes.root}>
            {imageSet.map((image) => (
                <ButtonBase
                    focusRipple
                    key={image.title}
                    className={classes.image}
                    focusVisibleClassName={classes.focusVisible}
                    style={{
                        width: image.width,
                    }}
                >
                    <span
                        className={classes.imageSrc}
                        style={{
                            backgroundImage: `url(${image.url})`,
                        }}
                    />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            className={classes.imageTitle}
                        >
                            {image.title}
                            <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
            ))}
            
        </div>
    );
}