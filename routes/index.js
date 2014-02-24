
/*
 * GET home page.
 */
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


/*
 * GET projects page.
 */
exports.projects2 = function(req, res, next){
	projects = require('../models/projects');
	req.url  = 'projects';
	// next();
	res.render('projects', {'title':'Projects', 'projects_list':projects.projects_overview});
};

exports.projects = function(req, res){
	projects = require('../models/projects');
	res.render('layout', {'key':'', type:'projects'});
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
  res.render('layout', {'key':'', type:'about'});
};

exports.about2 = function(req, res){
  res.render('about', {'key':'', type:'about'});
};


/*
 * GET project page.
 */
exports.project = function(req, res){
	projects = require('../models/projects');
	res.render('layout', {'key':req.params.id, 'type':'project'});
	// for (var key in projects){
	// 	console.log(key);
	// 	if (key == req.params.id && key == 'pixelateme')
	// 		res.render('pixme',  projects[key]);		

	// 	else if (key == req.params.id && key != 'pixelateme')
	// 		res.render('rigby',  projects[key]);		
	// }

	// if (req.params.id == 'rigby')
	// 	res.render('rigby',  projects.rigby);
	// if (req.params.id == 'things')
	// 	res.render('rigby',  projects.things);
	// if (req.params.id == 'lamba')
	// 	res.render('rigby',  projects.lamba);
	// if (req.params.id == 'lade')
	// 	res.render('rigby',  projects.lade);
	// if (req.params.id == 'picospaces')
	// 	res.render('rigby',  projects.picospaces);
	// if (req.params.id == 'grow')
	// 	res.render('rigby',  projects.grow);
	// if (req.params.id == 'haydara2yna')
	// 	res.render('rigby',  projects.hayda);
	// if (req.params.id == 'avantgarde')
	// 	res.render('rigby',  projects.avantgarde);
};

exports.project2 = function(req, res){
	projects = require('../models/projects');
	// res.render('layout', {'key':key, type:'project'})
	for (var key in projects){
	// 	console.log(key);
		if (key == req.params.id && key == 'pixelateme')
			res.render('pixme',  projects[key]);		

		else if (key == req.params.id && key != 'pixelateme'){
			projects[key]['url'] = key;
			res.render('project',  projects[key]);		
		}
	
}
};


/*
 * GET play page.
 */
