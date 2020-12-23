///////////////////////////////////////////////////////
// * EXPLANATION
///////////////////////////////////////////////////////
// * IMPORT SECTION

import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import styles from "./Cards.module.css";
///////////////////////////////////////////////////////
// * MAIN SECTION

const Cards = (props) => {
    console.log(props);
    return (
        <div className={styles}>
            <Grid container spacing={3} justify="center"></Grid>
        </div>
    );
};

///////////////////////////////////////////////////////
// * EXPORT SECTION
export default Cards;
