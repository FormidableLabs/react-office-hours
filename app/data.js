require('es6-promise').polyfill();
require('isomorphic-fetch');

import moment from 'moment';

function mapData(data) {
  return {
    southBound: data.map((datum) => {
      return {
        x: new Date(datum.date),
        y: Number(datum.fremont_bridge_sb)
      }
    }),
    northBound: data.map((datum) => {
      return {
        x: new Date(datum.date),
        y: Number(datum.fremont_bridge_nb)
      }
    })
  };
}

function format(date) {
  return moment(date).format('YYYY-MM-DDTHH:mm:ss');
}

function getUrl(fromDate, toDate) {
  const baseUrl = 'https://data.seattle.gov/resource/4xy5-26gy.json?$order=date%20ASC&$limit=100000';
  return `${baseUrl}&$where=date%20between%20'${format(fromDate)}'%20and%20'${format(toDate)}'`;
}

export function fetchData(fromDate, toDate) {
  return fetch(getUrl(fromDate, toDate))
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return mapData(json);
    });
}
