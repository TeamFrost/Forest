import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button';
// import carousel1 from "../img/carousel1.png";
// import carousel2 from "../img/carousel2.png";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 1920,
        height: 680,
    }
}));

function Slideshow(props) {
    var items = [
        {
            image: require("../img/carousel1.png")
        },
        {
            image: require("../img/carousel2.png")
        },
    ]
    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

export default Slideshow;

function Item(props) {
    const classes = useStyles();

    return (
        <div>
            <img src={props.item.image} />
        </div>
    )
}

