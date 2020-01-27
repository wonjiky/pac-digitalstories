import React from 'react';
import classes from './CountryShape.module.css';
import { easeQuadOut } from 'd3-ease';
import { Animate } from 'react-move';
import { interpolate } from 'flubber';
import _ from 'lodash';
class CountryShape extends React.Component {
 
 
    state = {
        // states: this.props.shape[0].features.map(d => { return d.geometry.coordinates })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.query.country, this.props.query.country)
    }
    

    render() {
        const { 
            shape, query
         } = this.props;
        let shapes = { ...shape }.data;

        let countries = shapes.features.map(d => d.geometry.coordinates[0])
        const { state : { states } } = this;

        const interpolator = interpolate(countries[query.country][0], countries[query.country][0])
        
        return (
            <div>
                <svg viewBox='0 0 300 300' >
                <Animate
                    start={{
                        opacity: 0,
                        d: interpolator(1),
                    }}

                    enter={[
                        {
                        opacity: [0.7],
                        timing: { duration: 1000 },
                        },
                    ]}

                    update={{
                        d: interpolator,
                        timing: { duration: 1000, ease: easeQuadOut },
                    }}
                    >
                    {(state) => {
                        return (
                            <g transform="translate(50, 0) scale(5)">
                                <path
                                    fill="#a70000"
                                    {...state}
                                />
                            </g>
                        )
                    }}
                </Animate>
                </svg>
            </div>
        )
    }
}

export default CountryShape;