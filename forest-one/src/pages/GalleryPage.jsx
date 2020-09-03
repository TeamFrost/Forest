import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import PhotoGallery from "../components/Gallery/PhotoGallery"
import HeaderSecond from "../components/HeaderSecond";

const useStyles = makeStyles(() => ({
    root: {
        marginLeft: 150,
        marginRight: 150,
    },
    text: {
        marginTop: 25,
        marginBottom:50,
        fontSize: 60,
        letterSpacing: '3px',
        fontWeight: 'semi-bold'
    }
}));


function GalleryPage() {

    const classes = useStyles();

    return (
        <div>
            <HeaderSecond />
            <Typography variant="h4" className={classes.text} >
                GALERIE FOTO
            </Typography>
            <div className={classes.root}>
                <PhotoGallery />
            </div>
        </div>

    );
}

export default GalleryPage;
