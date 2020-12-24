///////////////////////////////////////////////////////
// * EXPLANATION
///////////////////////////////////////////////////////
// * IMPORT SECTION

import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
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
        // console.log(country);
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        // fetch the data
        // set the state
    };
    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart />
            </div>
        );
    }
}
///////////////////////////////////////////////////////
// * EXPORT SECTION

export default App;
