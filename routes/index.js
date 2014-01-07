
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

  res.render('projects', {'projects': projects});
};

/*
 * GET play page.
 */
exports.play = function(req, res){
  res.render('play');
};

/*
 * GET about page.
 */
exports.about = function(req, res){
  res.render('about');
};

/*
 * GET about page.
 */
exports.project = function(req, res){
		projects = require('../models/projects'),

	console.log('IN EXPORTS PROJECTS');
	console.log(projects.rigby);
	if (req.params.id == 'rigby')
		res.render('rigby',  projects.rigby);
	if (req.params.id == 'things')
		res.render('rigby',  projects.things);
	if (req.params.id == 'lamba')
		res.render('rigby',  projects.lamba);
	if (req.params.id == 'lade')
		res.render('rigby',  projects.lade);

};