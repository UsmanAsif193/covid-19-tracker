import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useContextApi } from './ContextApi'



const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 100
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function GlobalStats() {
    const classes = useStyles();

    const globalData = useContextApi()

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {Object.keys(globalData[0]).map((keys, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper
                                className={classes.paper}
                                elevation={3}>
                                <h3>{keys.toUpperCase()}</h3>
                                <h3>{globalData[0][keys]}</h3>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}
