import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from '@material-ui/core';
 
const useStyles = makeStyles(theme => ({
  root: {
    padding: '120px',
    textAlign: 'center',
    color: 'white'
  }
}));

export default function IntroHero() {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <div className={classes.root}>
                <Typography variant="h2" gutterBottom>
                    BPTracker App
                </Typography>
                <Typography variant="p" gutterBottom>
                    hi! welcome to the blood pressure tracker
                </Typography>
            </div>
            
        </Container>
    )
}
