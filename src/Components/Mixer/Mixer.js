import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import KeyFigures from '../KeyFigures/KeyFigures';
import SmallMediumSearchBar from '../SearchBar/SmallMediumSearchBar';
import classes from './Mixer.module.css';


const mixer = props => {

    const { 
        countryList,
        query, language, keyFigureList
    } = props;

    return (
        <div className={classes.Mixer}>
            <div className={classes.Large}>
                <SearchBar 
                    options={countryList}
                    onSearchChange={props.onSearchChange}
                    query={query}
                    menuIsOpen={true}
                    />
            </div>
            <div className={classes.Sm_Md}>
                <SmallMediumSearchBar 
                    options={countryList}
                    onSearchChange={props.onSearchChange}
                    query={query}
                    menuIsOpen={false}
                    />
                <KeyFigures 
                    language={language}
                    type={'small'}
                    query={query}
                    data={keyFigureList}             
                    onKeyFigureChange={props.onKeyFigureChange}
                />
            </div>
        </div>
    )
}

export default mixer;
