//Important variables for routes
var express = require('express'),
router = express.Router();
var mongoose = require('mongoose'),
exam2 = mongoose.model('exam2');

//App and Config declartion function 
module.exports = function (app, config) {
  app.use('/api', router);

  // Route for posting a document
  router.post('/exams', function (req, res, next) {
	 console.log('Create Exam', 'verbose');
	var exam = new exam2(req.body);
	 exam.save()
	 .then(result => {
	res.status(201).json(result);
	 })
	.catch(err => {
	 return next(err);
	 })
   });
	
  //Route for getting all the document 
  router.get('/exam', function(req, res, next){
	 console.log('Get all users', 'verbose');

	  var query = exam2.find()
	  .sort(req.query.order)
	  .exec()
	  .then(result => {
		   if(result && result.length) {
		  res.status(200).json(result);
	  } else {
		  res.status(404).json({message: "No Exam"});
	  }
	  })
	  .catch(err => {
		return next(err);
	  });
  })

}