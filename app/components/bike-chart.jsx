require('es6-promise').polyfill();

import d3Scale from 'd3-scale';
import moment from 'moment';
import React from 'react';
import { VictoryChart, VictoryAxis, VictoryLine } from 'victory';

import { fetchData } from '../data';

const BikeChart = React.createClass({
  getInitialState() {
    return {
      data: [{
        x: '2015-01-01',
        y: 0
      },
      {
        x: '2015-01-02',
        y: 0
      }]
    };
  },

  update(fromDate, toDate) {
    fetchData(fromDate, toDate)
      .then((data) => this.setState({ data: data }));
  },

  componentWillMount() {
    const { fromDate, toDate } = this.props;
    this.update()
  },

  componentWillReceiveProps(nextProps) {
    const { fromDate, toDate } = nextProps;
    if (fromDate !== this.props.fromDate || toDate !== this.props.toDate) {
      this.update(fromDate, toDate);
    }
  },

  render() {
    return (
      <div>
        <VictoryChart
          height={450}
          scale={{
            x: d3Scale.time()
          }}
          >
          <VictoryAxis
            label='Date'
            tickFormat={(x) => moment(x).format('YYYY-MM-DD')}/>
          <VictoryLine
            data={this.state.data}/>
        </VictoryChart>
      </div>
    );
  }
});

export default BikeChart;
