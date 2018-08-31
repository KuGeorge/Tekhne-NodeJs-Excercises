var express = require('express');
var router = express.Router();

let tasks = require('../data');

//let flight = require('../flight');

/* for (let number in flights) {
	flights[number] = flight(flights[number]);
} */
/*
 * GET home page.
 */

router
  .get('/', function(req, res, next) {
    //console.log(flights);
    res.render('index', { title: 'My to do List', tasks });
  })
  .post('/', function(req, res, next) {
    // Get values from POST request. These can be done through forms or REST calls. These rely on the "name" attributes for forms
    var number = Object.keys(tasks).length + 1;
    var task = req.body.task;
    //call the create function for our database
    let item = {
      number,
      task
    };
    //flights.push(item);
    tasks[number] = item;
    console.log(tasks);
    //res.redirect("/");
    res.format({
      //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
      html() {
        // If it worked, set the header so the address bar doesn't still say /adduser
        res.location('');
        // And forward to success page
        res.redirect('/');
      },
      //JSON response will show the newly created blob
      json() {
        res.json(tasks);
      }
    });
  })
  .post('/:id/delete', function(req, res) {
    //find flight by ID
    delete tasks[req.params.id];

    res.format({
      //HTML returns us back to the main page, or you can create a success page
      html() {
        res.redirect('/');
      },
      //JSON returns the item with the message that is has been deleted
      json() {
        res.json(tasks);
      }
    });
  })
  .post('/:id/update', function(req, res) {
    var number = req.params.id;
    var task = req.body.task;
    //call the create function for our database
    let item = {
      number,
      task
    };
    //flights.push(item);
    tasks[req.params.id] = item;
    console.log(tasks);
    //res.redirect("/");
    res.format({
      //HTML response will set the location and redirect back to the home page. You could also create a 'success' page if that's your thing
      html() {
        // If it worked, set the header so the address bar doesn't still say /adduser
        res.location('');
        // And forward to success page
        res.redirect('/');
      },
      //JSON response will show the newly created blob
      json() {
        res.json(tasks);
      }
    });
  });

router
  .get('/new', function(req, res) {
    res.render('new', { title: 'Add New Task' });
  })
  .get('/:id/edit', function(req, res) {
    //find flight by ID
    let f = tasks[req.params.id];
    console.log('Flight-->', f);
    if (f) {
      res.format({
        //HTML response will render the 'edit.jade' template
        html() {
          res.render('edit', { task: f });
        },
        //JSON response will return the JSON output
        json() {
          res.json(f);
        }
      });
    }

  });

module.exports = router;


