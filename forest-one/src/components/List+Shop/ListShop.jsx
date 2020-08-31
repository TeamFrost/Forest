import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TableList from "./TableList";
import OnlineShop from "./OnlineShop";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 50,
        marginLeft: 170,
        display: "flex",
    }
}));

function ListShop() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <TableList />
            <OnlineShop />
        </div>
    );
}

export default ListShop;