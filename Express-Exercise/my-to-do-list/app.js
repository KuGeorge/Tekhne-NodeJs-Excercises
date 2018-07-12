const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
var id = 0;
var list = [{id:id,title:"some task"}];

// using the ejs template
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {list,title:"My to do list"});
});
app.post('/add', (req, res) => {
  var task = req.body.task;
  //console.log(task);
  list.push({id:++id,title:task})
 res.redirect("/");
});

app.get('/delete/:id', function(req, res, next) {
  list.findIndex((x)=>x==req.params.id);
  list.splice(list.findIndex((x)=>x==req.params.id), 1);
  id =list.length;
  res.redirect("/");
  //app.locals.list.splice(i, 1);
//res.send(app);
});

app.listen(3000, () => console.log('server on port 3000'));

