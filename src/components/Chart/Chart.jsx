///////////////////////////////////////////////////////
// * EXPLANATION
///////////////////////////////////////////////////////
// * IMPORT SECTION

import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
// error: failed to compile => solve by running `npm install --save chart.js` in cmd

// import custom modules
import styles from "./Chart.module.css";
import { fetchDailyData } from "../../api";
///////////////////////////////////////////////////////
// * MAIN SECTION

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        };
        console.log(dailyData);
        fetchAPI();
    }, []);

    const lineChart = dailyData.length ? (
        <Line
            data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [
                    {
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: "Infected",
                        borderColor: "#3333ff",
                        fill: true,
                    },
                    {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: "rgba(255, 0, 0, 0.5)",
                        fill: true,
                    },
                ],
            }}
        ></Line>
    ) : null;

    return <div className={styles.container}>{lineChart}</div>;
};

///////////////////////////////////////////////////////
// * EXPORT SECTION
export default Chart;
