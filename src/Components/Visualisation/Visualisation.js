import React from 'react';
import classes from './Visualisation.module.css';
import LineGraph from './LineGraph/LineGraph';
import KeyFigures from '../KeyFigures/KeyFigures';
import _ from 'lodash';

const visualisation = props => {
    const { 
        keyFigureList, 
        language, data,
        query, history } = props;

    let country = history.location.pathname === '/fr' ? 'Country_FR' : 'Country',
    dataType = keyFigureList.filter(d => d.type === query.keyfigure );

    let filterData = {
        country: country,
        data: cleanData(data[dataType[0].label]),
        type: dataType[0].label
    }
    
    function cleanData(data) {
        let res = [];
        for (let i in data) {
            res.push({ year: i, value: data[i]})
        }
        return res;
    }

    return (
        <div className={classes.Visualisation}> 
             <LineGraph 
                data={filterData}
             />
             <KeyFigures 
                language={language}
                query={query}
                data={keyFigureList}             
                onKeyFigureChange={props.onKeyFigureChange}
             />
        </div>
    )
};

export default visualisation;