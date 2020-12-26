///////////////////////////////////////////////////////
// * EXPLANATION
///////////////////////////////////////////////////////
// * IMPORT SECTION

import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import CoronaImage from "./images/image.png";
///////////////////////////////////////////////////////
// * MAIN SECTION

class App extends React.Component {
    state = {
        data: {},
        country: "",
    };
    // React automatically set state in the back code: no need to code constructor again
    async componentDidMount() {
        const fetchedData = await fetchData();
        console.log(fetchedData);
        this.setState({ data: fetchedData });
    }
    handleCountryChange = async (country) => {
        console.log("country: ", country);
        const fetchedData = await fetchData(country);
        // fetch the data
        console.log(fetchedData);
        // set the state
        this.setState({
            data: fetchedData,
            country: country,
        });
    };
    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img
                    className={styles.image}
                    src={CoronaImage}
                    alt="covid-19"
                ></img>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        );
    }
}
///////////////////////////////////////////////////////
// * EXPORT SECTION

export default App;
