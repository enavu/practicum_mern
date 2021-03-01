//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Business = require('../../models/Business');


router.get('/', function(req, res){
  res.render('index')
});

//apis


router.route('/insert')
.post(function(req,res) {
 var business = new Business();
  business.transaction = req.body.trans;
  business.amount = req.body.amount;
  business.month = req.body.month;
  business.year = req.body.year;
  business.artist = req.body.artist;

business.save(function(err) {
      if (err)
        res.send(err);
      res.send('Business successfully added!');
  });
})
router.route('/update')
.post(function(req, res) {
 const doc = {
     description: req.body.description,
     amount: req.body.amount,
     month: req.body.month,
     year: req.body.year
 };
 console.log(doc);
  Business.update({_id: req.body._id}, doc, function(err, result) {
      if (err)
        res.send(err);
      res.send('Business successfully updated!');
  });
});
router.get('/delete', function(req, res){
 var id = req.query.id;
 Business.find({_id: id}).remove().exec(function(err, business) {
  if(err)
   res.send(err)
  res.send('Business successfully deleted!');
 })
});
router.get('/getAll',function(req, res) {
 var monthRec = req.query.month;
 var yearRec = req.query.year;
 if(monthRec && monthRec != 'All'){
  Business.find({$and: [ {month: monthRec}, {year: yearRec}]}, function(err, businesses) {
   if (err)
    res.send(err);
   res.json(businesses);
  });
 } else {
  Business.find({year: yearRec}, function(err, businesses) {
   if (err)
    res.send(err);
   res.json(businesses);
  });
 }
});









module.exports = router;
