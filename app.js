
/**
 * Module dependencies.
 */

 process.env.PWD = process.cwd()

var express = require('express'),
	engine = require('ejs-locals'),
		projects = require('./models/projects'),
	routes = require('./routes'),

	user = require('./routes/user'),
	http = require('http'),
	path = require('path'),
	compass = require('node-compass');

var app = express();

// all environments
var port = Number(process.env.PORT || 3000)
app.set('port', port);
app.set('views', path.join(process.env.PWD, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(compass({ cwd: process.env.PWD + 'public' }));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(compass({ cwd: process.env.PWD + 'public' }));
app.use(express.static(path.join(process.env.PWD, 'public')));



// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/projects',routes.projects);
app.get('/play',routes.play);
app.get('/about',routes.about);
app.get('/projects/:id',routes.project);
app.get('/play/:id',routes.project);

http.createServer(app).listen(app.get('port'), function(){
});
