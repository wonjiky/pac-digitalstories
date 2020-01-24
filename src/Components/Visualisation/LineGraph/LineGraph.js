import React from 'react';
import { ResponsiveContainer, LineChart, YAxis, XAxis, Line, Tooltip  } from 'recharts'
import classes from './LineGraph.module.css';

const lineGraph = props => {
    const { data, language } = props;
    let lineChart = (
        <ResponsiveContainer width="100%" height="100%" >
            <LineChart data={data.data}
                margin={{top: 10, right: 20, left: 20, bottom: 10}}
                >
                <XAxis strokeWidth="1px" stroke={'black'} tick={{fontSize: '11px'}} dataKey={'year'} />
                <YAxis hide={true} tick={{fontSize: '12px'}} type="number" domain={[0, 'dataMax']} />
                <Tooltip cursor={{ strokeWidth: 0 }} content={renderTooltip} type={data.type} language={language} />
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
