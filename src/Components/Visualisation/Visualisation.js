import React from 'react';
import classes from './Visualisation.module.css';
import LineGraph from './LineGraph/LineGraph';
import KeyFigures from '../KeyFigures/KeyFigures';

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
            res.push({ 
                year: i, 
                value: 
                dataType[0].ID === 2 && query.country <= 50 ? data[i] * 100 : 
                dataType[0].ID === 4 && query.country <= 50 ? data[i] * 100 : 
                data[i],
                yAxisKey: data[i]
            })
        }
        return res;
    }
    let line = <LineGraph 
        data={filterData}
        query={query}
    />

    let keyfigure = (
        <div className={classes.KeyFigure__Md_Lg}>
            <KeyFigures 
                    language={language}
                    query={query}
                    data={keyFigureList}             
                    onKeyFigureChange={props.onKeyFigureChange}
                />
        </div>
    );

    return (
        <div className={classes.Visualisation}> 
            {keyfigure}
            {line}
        </div>
    )
};

export default visualisation;