import React from 'react';
import classes from './CountryShape.module.css';
import { easeQuadOut } from 'd3-ease';
import { feature } from 'topojson'
import { Animate } from 'react-move';
import { interpolate } from 'flubber';
import _ from 'lodash';
class CountryShape extends React.Component {
 
 
    state = {
        // states: this.props.shape[0].features.map(d => { return d.geometry.coordinates })
      }
    
    update = () => { // take the first one, put it at the end
        this.setState(({ states }) => ({
          states: [
            ...states.slice(1),
            states[0],
          ],
        }))
    }
    
    render() {
        const { 
            shape, query
         } = this.props;
        let shapes = { ...shape }.data;
        // let selectedCountry = _.chain(shapes)
        //     .filter(shape => shape.properties.ID === Number(query.country) )
        //     .map(shape => ({
        //         ID: shape.properties.ID,
        //         coordinates: shape.geometry.coordinates
        //     }))
        //     .value();
        

        console.log(shapes);
        // let states = shapes.map(shape => shape.geometry.coordinates);
        // const { state : { states } } = this;
        // const interpolator = interpolate(states[0], states[1])
        // console.log(states);
        return (
            <div>
                {/* <Animate
                    start={{
                        opacity: 0,
                        d: selectedCountry[0].coordinates //interpolator(1),
                    }}

                    enter={[
                        {
                        opacity: [0.7],
                        timing: { duration: 1000 },
                        },
                    ]}

                    update={{
                        d: selectedCountry[0].coordinates,
                        timing: { duration: 1000, ease: easeQuadOut },
                    }}
                    >
                    {(state) => {
                        return (
                        <svg viewBox='0 0 300 300' >
                            <g transform="translate(100, 0) scale(0.8)">
                                <path
                                fill="#ff69b4"
                                {...state}
                                />
                            </g>
                        </svg>
                        )
                    }}
                </Animate> */}
            </div>
        )
    }
}

export default CountryShape;