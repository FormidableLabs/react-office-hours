require('react-datepicker/dist/react-datepicker.css');
import DatePicker from 'react-datepicker';

import moment from 'moment';
import React from 'react';

import BikeChart from './bike-chart';


const App = React.createClass({

  getInitialState() {
    return {
      fromDate: moment('2015-06-01'),
      toDate: moment('2015-06-05')
    }
  },

  onFromDateChanged(date) {
    this.setState({
      fromDate: date
    });
  },

  onToDateChanged(date) {
    this.setState({
      toDate: date
    });
  },

  render() {
    return (
      <div style={{
        font: '12px sans-serif'
      }}>
        <h1>Fremont Bicycle Traffic</h1>

        <label>
          <span>From date</span>
          <DatePicker
            selected={this.state.fromDate}
            onChange={this.onFromDateChanged} />
        </label>

        <label>
          <span>To date</span>
          <DatePicker
            selected={this.state.toDate}
            onChange={this.onToDateChanged} />
        </label>

        <section style={{paddingTop: '50px'}}>
          <BikeChart fromDate={this.state.fromDate} toDate={this.state.toDate} />
        </section>

      </div>
    );
  }
});

export default App;
