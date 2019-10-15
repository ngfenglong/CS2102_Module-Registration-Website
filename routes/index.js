const express = require('express');
const router = express.Router();

const pool = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ModRec - Homepage' , condition: true, anyArray:[1,2,3]});
});

// router.get('/testing', function(req, res, next) {
//   res.render('testing', {title: 'test', anyArray:[1,2]});
// });

router.get('/appeal', function(req, res, next) {
  res.render('appeal', { title: 'ModRec - Appeal' , anyArray:[1,2,3]});
});

router.get('/addappeal', function(req, res, next) {
  res.render('addappeal', { title: 'ModRec - Add Appeals' , anyArray:[1,2,3]});
});

router.get('/login', function(req, res, next) {
  res.render('login', {title: 'ModRec - Login Page', logoTitle: 'ModRec',layout: false});
});

router.get('/studentInfo', function(req, res, next) {
  res.render('studentInfo', {title: 'Student Information'});
});

router.get('/addModule', function(req, res, next) {
  res.render('addModule', { title: 'ModRec - Add a Module' , anyArray:[1,2,3]});
});

router.get('/registeredModule', function(req, res, next) {
  res.render('registeredModule', { title: 'ModRec - Display all registered modules' , anyArray:[1,2,3]});
});


router.get('/viewModules', function(req, res, next) {
  res.render('viewRegisteredModules', { title: 'ModRec - View Registered Modules'});
});

router.get('/allmodules', function(req, res, next) {
  res.render('allmodules', {title: 'All Modules', anyArray:[1,2,3]});
});

router.get('/modcreate', function(req, res, next) {
  res.render('modcreate', {title: 'ModRec - Module Creation', logoTitle: 'ModRec', anyArray:[1,2,3]});
});

router.get('/viewModuleDetail', function(req, res, next) {
  res.render('viewModuleDetail', {title: 'ModuleDetail'});
});

module.exports = router;
