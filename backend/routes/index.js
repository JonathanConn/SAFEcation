var express = require('express');
var router = express.Router();
const Data = require('./data');

const mongoose = require('mongoose');
const dbRoute = 'mongodb+srv://dbadmin:Uc032bpnJxCJXiBw@cluster0.hbxal.mongodb.net/safecation?retryWrites=true&w=majority';//*
mongoose.connect(dbRoute, { useUnifiedTopology: true });//*
let db = mongoose.connection;//*

db.once('open', () => console.log('connected to the database'));//*
db.on('error', console.error.bind(console, 'MongoDB connection error:'));//*



router.get('/vaxdata', function(req, res, next) {
  db.db.collection("vax_data", function(err, collection){
    collection.find({}).toArray(function(err, data){
      return res.json(data);
    })
  })
});
module.exports = router;



router.get('/uscovid', function(req, res, next) {
  db.db.collection("us_covid", function(err, collection){
    collection.find({}).toArray(function(err, data){
      return res.json(data);
    })
  })
});
module.exports = router;


router.get('/globalcovid', function(req, res, next) {
  db.db.collection("global_covid", function(err, collection){
    collection.find({}).toArray(function(err, data){
      return res.json(data);
    })
  })
});
module.exports = router;


router.get('/crimedata', function(req, res, next) {
  db.db.collection("crime_data", function(err, collection){
    collection.find({}).toArray(function(err, data){
      return res.json(data);
    })
  })
});
module.exports = router;
 