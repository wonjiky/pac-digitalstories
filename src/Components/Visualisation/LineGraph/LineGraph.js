import React from 'react';
import { ResponsiveContainer, LineChart, YAxis, XAxis, Line, Tooltip  } from 'recharts'
import classes from './LineGraph.module.css';

const lineGraph = props => {
    const { data } = props;
    let lineChart = (
        <ResponsiveContainer width="100%" height="100%" >
            <LineChart data={data.data}
                margin={{top: 10, right: 20, left: 20, bottom: 10}}
                >
                <XAxis strokeWidth="1px" stroke={'black'} tick={{fontSize: '11px'}} dataKey={'year'} />
                <YAxis hide={true} tick={{fontSize: '12px'}} type="number" domain={[0, 'dataMax']} />
                <Tooltip cursor={{ strokeWidth: 0 }} content={renderTooltip} type={data.type} />
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
    console.log(props.type)
    if ( props.active && props.payload !== null && props.payload[0] !== null ){
        let payload = props.payload[0].payload;
    
    let tooltip = null;
    switch( props.type ) {
        case 'Upop' : 
            return tooltip = (
                <p className={classes.Tooltip}>
                        {parseFloat(payload.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Inhabitants
                </p>
            )
        break;
        case 'Urbanlevel' : 
            return tooltip = (
                <p className={classes.Tooltip}>
                        {parseFloat(payload.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} %
                </p>
            )
        break;
        case 'NumAgllos' : 
            return tooltip = (
                <p className={classes.Tooltip}>
                        {parseFloat(payload.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} agglomerations
                </p>
            )
        break;
        case 'Mpop' : 
            return tooltip = (
                <p className={classes.Tooltip}>
                        {parseFloat(payload.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Inhabitants
                </p>
            )
        break;
        case 'ADBA' : 
            return tooltip = (
                <p className={classes.Tooltip}>
                        {parseFloat(payload.value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} km
                </p>
            )
        break;
    }
    
    }
}
