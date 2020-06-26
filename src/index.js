import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import data from './components/data.js';
import Airtable from 'airtable';

let base = new Airtable({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyP2OBqwhjW6HpxS'
}).base('app9W8uIpC5sD7e40');
console.log(data['records'][0]);

base('LEARN').select({
  // Selecting the first 3 records in Full List (Table):
  maxRecords: 3,
  view: "Full List (Table)"
}).eachPage(function page(records, fetchNextPage) {
  // This function (`page`) will get called for each page of records.

  records.forEach(function (record) {
    console.log('Retrieved', record.get('Resource'));
  });

  // To fetch the next page of records, call `fetchNextPage`.
  // If there are more records, `page` will get called again.
  // If there are no more records, `done` will get called.
  fetchNextPage();

}, function done(err) {
  if (err) { console.error(err); return; }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('button')
);
