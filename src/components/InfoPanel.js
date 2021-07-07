import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import { Api } from './api.js'

// import Api from './api.js'

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

export default function InfoPanel() {
    const classes = useStyles();


    // const ContextApi = useContext(ApiContext);


    const [globalData, setGlobalData] = useState({});

    useEffect(() => {


        async function getData() {
            const response = await fetch("https://coronavirus-tracker-api.herokuapp.com/v2/locations")
            let data = await response.json()

            console.log(data)

            const CountryData = data.locations;
            console.log(CountryData)

            const latestData = data.latest;
            console.log(latestData);
            setGlobalData(latestData);

        }
        getData();
    }, [])

    return (
        <div className={classes.root}>
            {/* <Api globalData={globalData} /> */}
            <Grid container spacing={3}>
                {Object.keys(globalData).map((keys, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper
                                className={classes.paper}
                                elevation={3}>
                                <h3>{keys.toUpperCase()}</h3>
                                <h3>{globalData[keys]}</h3>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

//     var axios = require("axios").default;

//     var options = {
//         method: 'GET',
//         url: 'https://covid-19-tracking.p.rapidapi.com/v1',
//         headers: { 'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com' }
//     };


//     axios.request(options).then(function (response) {
//         console.log(response.data);
//     }).catch(function (error) {
//         console.error(error);
//     });

//     // setGlobalData(response.data)
// }, [])