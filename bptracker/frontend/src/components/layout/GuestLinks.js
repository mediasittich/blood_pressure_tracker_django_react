import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },

    },
}));

export default function GuestLinks() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
                <Button component={Link} to="/register">Sign Up</Button>
                <Button component={Link} to="/login">Sign In</Button>
        </div>
    );
};
