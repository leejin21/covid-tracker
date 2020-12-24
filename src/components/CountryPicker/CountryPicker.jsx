///////////////////////////////////////////////////////
// * EXPLANATION
///////////////////////////////////////////////////////
// * IMPORT SECTION

import React, { useState, useEffect } from "react";
import { NaiveSelect, FormControl, NativeSelect } from "@material-ui/core";

// import custom modules
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
///////////////////////////////////////////////////////
// * MAIN SECTION

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        };
        fetchAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect
                defaultValue=""
                onChange={(e) => handleCountryChange(e.target.value)}
            >
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) => (
                    <option value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

///////////////////////////////////////////////////////
// * EXPORT SECTION
export default CountryPicker;
