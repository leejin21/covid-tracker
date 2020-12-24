///////////////////////////////////////////////////////
// * EXPLANATION
///////////////////////////////////////////////////////
// * IMPORT SECTION

import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";
///////////////////////////////////////////////////////
// * MAIN SECTION

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return "Loading....";
    }

    return (
        <div className={styles}>
            <Grid container spacing={3} justify="center">
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={3}
                    className={cx(styles.card, styles.infected)}
                >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            INFECTED
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=","
                            ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={3}
                    className={cx(styles.card, styles.recovered)}
                >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            RECOVERED
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=","
                            ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of recoveries of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid
                    item
                    component={Card}
                    xs={12}
                    md={3}
                    className={cx(styles.card, styles.deaths)}
                >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            DEATHS
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=","
                            ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body2">
                            Number of deaths caused by COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

///////////////////////////////////////////////////////
// * EXPORT SECTION
export default Cards;
