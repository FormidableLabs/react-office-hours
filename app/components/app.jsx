import d3Scale from 'd3-scale';
import moment from 'moment';
import React from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';

import data from '../data';

function mapData() {
  return data.map((datum) => {
    return {
      x: new Date(datum.date),
      y: Number(datum.fremont_bridge_nb) + Number(datum.fremont_bridge_sb)
    };
  });
}

console.table(mapData())

const App = React.createClass({
  componentWillMount() {},

  render() {
    return (
      <div>
        <h1>Fremont Bicycle Traffic</h1>

        <VictoryChart
          height={450}
          scale={{
            x: d3Scale.scaleTime(),
            y: d3Scale.scaleLinear()
          }}>
          <VictoryAxis
            label="Date"
            tickFormat={(x) => moment(x).format('YYYY-MM-DD')}/>
          <VictoryLine
            data={mapData()}/>
        </VictoryChart>

      </div>
    );
  }
});

export default App;
