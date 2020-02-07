import React from 'react';
import { ResponsiveContainer, LineChart, YAxis, XAxis, Line, Tooltip, CartesianGrid  } from 'recharts'
import classes from './LineGraph.module.css';

const lineGraph = props => {
    const { data, query } = props;
    let toPercent = value => {
        let domain;
        switch( data.type ) {
            case 'Upop' : 
                domain = `${value.toLocaleString("ru-RU")}`;
            break;
            case 'Urbanlevel' : 
                domain = `${(value).toFixed(0)}%`;
            break;
            case 'NumAgllos' : 
                domain = value;
            break;
            case 'Mpop' : 
                domain = `${(value).toFixed(0)}%`;;
            break;
            case 'ADBA' : 
                domain = `${(value).toFixed(0)}km`;;
            break;
            default: 
            domain = null;
        }
        return domain;
    }
    let lineChart = (
        <ResponsiveContainer height="100%" >
            <LineChart data={data.data} margin={{top: 10, right: 20, left: 10, bottom: 10}}
                >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis stroke={'black'} interval={0} tick={<CustomizedAxisTick />} tickSize={10} dataKey={'year'} />
                <YAxis tickFormatter={toPercent} dataKey='value' strokeWidth="0px" stroke='black' tick={{fontSize: '11px'}} 
                    domain ={ [ (dataMin) => min(dataMin, data.type), (dataMax) => max(dataMax, data.type) ] }/>
                {/* domain={domain(data.type, 'dataMin', 'dataMax')} /> */}
                <Tooltip cursor={{ strokeWidth: 0 }} content={renderTooltip} type={data.type} language={query.lang} />
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

const CustomizedAxisTick = props => {
    const { x, y, payload } = props
  
    return (
      <g transform={`translate(${x},${y})`}>
        <text dy={16} fontSize={'11px'} textAnchor='middle' fill='black'>{payload.value}</text>
      </g>
    )
}

const min = (type) => {
    let domain;
    switch( type ) {
        case 'Upop' : 
            domain = 0;
        break;
        case 'Urbanlevel' : 
            domain = 0;
        break;
        case 'NumAgllos' : 
            domain = 0;
        break;
        case 'Mpop' : 
            domain = 0;
        break;
        case 'ADBA' : 
            domain = 0;
        break;
        default: 
        domain = null;
    }
    return domain;
}

const max = (value, type) => {
    let domain;
    switch( type ) {
        case 'Upop' : 
            domain = Math.round( (value + 10000) /10000)*10000;
        break;
        case 'Urbanlevel' : 
            domain = 100;
        break;
        case 'NumAgllos' : 
            domain = value;
        break;
        case 'Mpop' : 
            domain = 100;
        break;
        case 'ADBA' : 
            domain = Math.round( (value + 50) / 100) * 100;
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
                    {Math.round(payload.value)} %
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
                    {Math.round(payload.value)} %
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
