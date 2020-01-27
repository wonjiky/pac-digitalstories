import React from 'react';
import { ResponsiveContainer, LineChart, YAxis, XAxis, Line, Tooltip, CartesianGrid  } from 'recharts'
import classes from './LineGraph.module.css';

const lineGraph = props => {
    const { data, query } = props;
    let lineChart = (
        <ResponsiveContainer width="100%" height="100%" >
            <LineChart data={data.data}
                margin={{top: 10, right: 20, left: 20, bottom: 10}}
                >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis strokeWidth="2px" stroke={'black'} tick={{fontSize: '11px'}} dataKey={'year'} />
                <YAxis strokeWidth="0px" tick={{fontSize: '11px'}} domain={domain(data.type, 'dataMin', 'dataMax')} />
                <Tooltip cursor={{ strokeWidth: 0 }} content={renderTooltip} type={data.type} language={query.language} />
                <Line type="monotone" dataKey="value" strokeWidth="3px" stroke={'#a70000'} fill="#a70000" activeDot={{r: 10}}/>
            </LineChart>
        </ResponsiveContainer>
    )

    return (
        <div className={classes.LineGraph}>
            {lineChart}
        </div>
    );
}

export default lineGraph;

const domain = (type, min, max) => {
    let convert = (value) => {
        return parseFloat(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }
    let domain = [convert(min), convert(max)];;
    switch( type.type ) {
        case 'Upop' : 
            domain = [convert(0), convert(max)];
        break;
        case 'Urbanlevel' : 
        domain = [];
        break;
        case 'NumAgllos' : 
            domain = [convert(0), convert(max)];
        break;
        case 'Mpop' : 
        domain = [];
        break;
        case 'ADBA' : 
            domain = [convert(0), convert(max)];
        break;
        default: 
        domain = null;
    }
    return domain;
}

const renderTooltip = props => {
    if ( props.active && props.payload !== null && props.payload[0] !== null ){
        let payload = props.payload[0].payload;
    let inhab = 'inhabitants', agglos = 'agglomerations';
    if(props.language === 'fr') {
        inhab = 'habitants'
        agglos = 'agglomérations';
    }


    let tooltip = null;
    switch( props.type ) {
        case 'Upop' : 
            tooltip = (
                <p className={classes.Tooltip}>
                    {parseFloat(payload.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} {inhab}
                </p>
            )
        break;
        case 'Urbanlevel' : 
            tooltip = (
                <p className={classes.Tooltip}>
                    {Math.round(payload.value * 100)} %
                </p>
            )
        break;
        case 'NumAgllos' : 
            tooltip = (
                <p className={classes.Tooltip}>
                    {parseFloat(payload.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} {agglos}
                </p>
            )
        break;
        case 'Mpop' : 
            tooltip = (
                <p className={classes.Tooltip}>
                    {Math.round(payload.value * 100)} %
                </p>
            )
        break;
        case 'ADBA' : 
            tooltip = (
                <p className={classes.Tooltip}>
                    {parseFloat(payload.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km
                </p>
            )
        break;
        default: 
            tooltip = null;
    }
    
    return tooltip;
    
    }
}
