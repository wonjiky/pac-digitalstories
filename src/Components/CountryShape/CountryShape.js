import React from 'react';
import classes from './CountryShape.module.css';
import { feature } from 'topojson';
import { easeQuadOut } from 'd3-ease';
import { Animate } from 'react-move';
import { interpolate } from 'flubber';

class CountryShape extends React.Component {
    // state = {
    //     states: feature(statesJSON, statesJSON.objects.states)
    //       .features.map((d) => {
    //         return d.geometry.coordinates[0]
    //       }),
    //   }
    
    update = () => { // take the first one, put it at the end
        // this.setState(({ states }) => ({
        //     states: [
        //         ...states.slice(1),
        //         states[0],
        //     ],
        // }))
    }

    render() {
        const { 
            shape, query
         } = this.props;
        let states = shape, selectedCountry = query.country;
        console.log(states);

        return (
            <div>

            </div>
        )
            {/* <button onClick={update}>Update</button>
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
                    <g transform="translate(100, 0) scale(0.8)">
                        <path
                        fill="#ff69b4"
                        {...state}
                        />
                    </g>
                    )
                }}
            </Animate> */}
    }
}

export default CountryShape;