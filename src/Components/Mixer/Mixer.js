import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CountryShape from '../CountryShape/CountryShape';
import classes from './Mixer.module.css';


const mixer = props => {

    const { 
        countryList,
        query, shape
    } = props;

    return (
        <div className={classes.Mixer}>
            <CountryShape
                shape={shape}
                query={query}
            />
            <SearchBar 
                options={countryList}
                
                onSearchChange={props.onSearchChange}
                query={query}
                />
        </div>
    )
}

export default mixer;
