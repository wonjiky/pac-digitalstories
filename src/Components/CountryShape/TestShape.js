import React, { PureComponent } from 'react'
import { feature } from 'topojson'
import { easeQuadOut } from 'd3-ease'
import { Animate } from 'react-move'
import { interpolate } from 'flubber'
import countries from '../../data/geo_country';

const view = [500, 500] // [width, height]
const trbl = [10, 10, 10, 10] // [top, right, bottom, left] margins

class Example extends PureComponent {
  state = {
    country: countries.data.features.map(d => {
        return d.geometry.coordinates[0]
    }),
  }

  update = () => { // take the first one, put it at the end
    this.setState(({ country }) => ({
      states: [
        ...country.slice(1),
        country[0],
      ],
    }))
  }

  render() {
    //   console.log(this.props);
    const { update, state: { states, country } } = this;
    const interpolator = interpolate(country[0][0], country[1][0]);

    return (
      <div>
        <button onClick={update}>Update</button>
        <svg  viewBox='0 0 300 300' trbl={trbl}>
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
          </Animate>
        </svg>
      </div>
    )
  }
}

export default Example