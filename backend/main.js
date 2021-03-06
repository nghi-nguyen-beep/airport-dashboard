const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config({path: '../.env'});
const port = 8081;
const csv = require('csv-parser');
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend/dist')));

const crudHelper = require("./server/helpers/crudHelper");
// The database_name should be "airport-<your_last_name_in_all_lowercase>" for example John Doe would be "airport-doe"
const database_name = process.env.CLOUDANT_DB_NAME;

// Post request to create a plane's status
app.post('/api/planestatus/create', (req, res) => {
  crudHelper.createPlaneStatus(database_name, req.body)
    .then(result => res.send(result))
    .catch(err => console.log("Error creating plane. ", err.description));
});

// Get request to read a plane's status
app.get('/api/planestatus/read', (req, res) => {
  crudHelper.readPlaneStatus(database_name)
  .then(result => res.send(result))
  .catch(err => console.log("Error reading database. ", err.description));
});

// Post request to update a plane's status (body must include, _id, _rev, planeObject)
app.post('/api/planestatus/update', (req, res) => {
  crudHelper.updatePlaneStatus(database_name, req.body)
  .then(result => res.send({result}))
  .catch(err => console.log("Error updating plane. ", err.description));
});

// Post request to delete a plane's status (body must include _id, _rev)
app.post('/api/planestatus/delete', (req, res) => {
 crudHelper.deletePlaneStatus(database_name, req.body)
 .then(result => res.send(result))
 .catch(err => console.log("Error deleting plane. ", err.description)) 
});

// Get request to get IATA code of airports in city
app.get('/api/city', (req, res) => {
  getCityCodes(req,res);
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});


app.listen(port, function () {
  console.log('Server listening on port ' + port);
});

// https://stackabuse.com/reading-and-writing-csv-files-with-node-js/

function getCityCodes(req, res) {
  var iata = {};
  let user_city = String(req.query.city).toLowerCase().replace(/\s/g,'');
  let counter = 0;
  fs.createReadStream('./server/helpers/iata_data/iata.csv')
    .pipe(csv())
    .on('data', (row) => {  
      if (user_city === row['﻿City'].toLowerCase().replace(/\s/g,'')) {
        iata[counter] = {'IATA': row['IATA'], 'State': row['State'], 'City': row['﻿City'] }
        counter++;
      }
    })
    .on('end', () => {
      res.send(iata);
    });
}