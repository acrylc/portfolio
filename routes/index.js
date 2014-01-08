
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


/*
 * GET projects page.
 */
exports.projects = function(req, res){
	projects = require('../models/projects');
	res.render('projects', {'title':'Projects', 'projects_list':projects.projects_overview});
};

/*
 * GET play page.
 */
exports.play = function(req, res){
	projects = require('../models/projects');
	res.render('projects', {'title':'Play', 'projects_list':projects.play_overview});
};

/*
 * GET about page.
 */
exports.about = function(req, res){
  res.render('about');
};

/*
 * GET project page.
 */
exports.project = function(req, res){
	projects = require('../models/projects');
	if (req.params.id == 'rigby')
		res.render('rigby',  projects.rigby);
	if (req.params.id == 'things')
		res.render('rigby',  projects.things);
	if (req.params.id == 'lamba')
		res.render('rigby',  projects.lamba);
	if (req.params.id == 'lade')
		res.render('rigby',  projects.lade);
	if (req.params.id == 'picospaces')
		res.render('rigby',  projects.picospaces);
		if (req.params.id == 'grow')
		res.render('rigby',  projects.grow);
};

/*
 * GET play page.
 */
