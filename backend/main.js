const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config({path: '../.env'});
const port = 8081;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend/dist')));

const crudHelper = require("./server/helpers/crudHelper");

// The database_name should be "airport-<your_last_name_in_all_lowercase>" for example John Doe would be "airport-doe"
const database_name = process.env.CLOUDANT_DB_NAME;

// Post request to create a plane's status
app.post('/api/planestatus/create', (req, res) => {
  console.log(req.body);
  crudHelper.createPlaneStatus(database_name, req.body)
    .then(result => res.send(result))
    .catch(err => console.log(err.description));
});

// Get request to read a plane's status
app.get('/api/planestatus/read', (req, res) => {
  crudHelper.readPlaneStatus(database_name).then(function (result) {
    res.send(result);
  })
});

// Post request to update a plane's status
app.post('/api/planestatus/update', (req, res) => {
  crudHelper.updatePlaneStatus(database_name, req.body)
  .then(result => res.send({result}))
  .catch(err => console.log("Error updating plane. ", err.description));
});

// Post request to delete a plane's status
app.post('/api/planestatus/delete', (req, res) => {
console.log("body", req.body);
 crudHelper.deletePlaneStatus(database_name, req.body._id, req.body._rev)
 .then(result => res.send(result))
 .catch(err => console.log("Error deleting plane. ", err.description)) 
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(port, function () {
  console.log('Server listening on port ' + port);
});

