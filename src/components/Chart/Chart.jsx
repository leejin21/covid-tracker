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

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    // props: data, country(used for each country cases: bar chart)
    const [dailyData, setDailyData] = useState([]);
    // only used for global data

    useEffect(() => {
        // if 2nd param== empty array: makes useEffect behave as componentdidmount
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        };
        console.log(dailyData);
        fetchAPI();
    }, []);

    const barChart = confirmed ? (
        <Bar
            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [
                    {
                        label: "people",
                        backgroundColor: [
                            // backgroundcolor와 labels는 대응됨
                            "rgba(0, 0, 255, 0.5)",
                            "rgba(0, 255, 0, 0.5)",
                            "rgba(255, 0, 0, 0.5)",
                        ],
                        data: [confirmed.value, recovered.value, deaths.value],
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` },
            }}
        ></Bar>
    ) : null;

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

    return (
        <div className={styles.container}>{country ? barChart : lineChart}</div>
    );
};

///////////////////////////////////////////////////////
// * EXPORT SECTION
export default Chart;
