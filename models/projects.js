exports.projects_overview = [

	{'name':'Rigby', 'url':'rigby','img':'palette.png'},
	{'name':'ThingsJS', 'url':'things', 'img':'things.png'},
	{'name':'Lebanon Election Data', 'url':'lade', 'img':'lade.png'},
	{'name':'Lamba Labs', 'url':'lamba', 'img':'workshop.jpg'},
	{'name':'Memory Shells', 'url':'memory'}, 
	{'name':'Hayda Ra2yna', 'url':'haydara2yna'}

];


exports.play_overview = [

	{'name':'Grow', 'url':'grow'},
	{'name':'PicoSpaces', 'url':'picospaces'},
	{'name':'Hayda Ra2yna', 'url':'lade'},
	{'name':'Whisker', 'url':'lamba'},	
	{'name':'Flock', 'url':'rigby'},
	{'name':'TicTag', 'url':'things'},
	{'name':'Nour', 'url':'lade'},
	{'name':'Poster', 'url':'lamba'},
	{'name':'Pixelate Me', 'url':'lamba'},
	{'name':'Generative Art Experiments', 'url':'lamba'}

];

exports.rigby = {

	    title : 'Rigby',

	    tagline : 'Off the top of your head, what does the color #5197a5 represent? How can we represent colors associated to a context?',

		description : ' Rigby.io was built to answer the question of how to reliably share color palettes representing a certain environment. By juxtaposing an image dragged in by the user with its color palette, context is associated with the derived spectra. <br> The application was built using HTML5 APIs and underscore.js. Using the file API as well as building a custom machine vision algorithm allows for the color palette generation to be offloaded to the client for efficiency. ',
	    
	    summary : {
	    	date : '2013',
	    	methods : ['Web Development', 'Computer Vision'],
	    	technology : ['HTML5 File Api', 'Canvas', 'Backbone']
	    },

	    images : [
	        '/images/rigby.png'
	    ]
	}



exports.things = {

    title : 'ThingsJS',

    tagline : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet neque est. Quisque eu rutrum ante.',

	description : ' Web Components are custom elements of HTML and javascript that enable web developers to reuse certain scripts in building their web application. By creating a web application framework around these elements, thingsJS aims to abstract the interface between hardware and web application development.  <br> To create an internet of things web application, a developer uses the thingsJS library and can insert elements such as <led> or <pressure> to connect to their physical LED or pressure sensor counterparts. The DOM elements can then be accessed via a javascript layer of callbacks such as .onChange, .onTurnOff. Each web component has its own set of callbacks detailed in the API.',
    
     summary : {
    	date : '2013',
    	methods : ['Web Development', 'Physical Computing', 'Networks'],
    	technology : ['SocketIO', 'Arduino', 'Web Components', 'Node']
    },

    images : [
        '/images/rigby.png'
    ]
}



exports.lade = {

    title : 'Lebanon Election Data Platform',

    tagline : 'Visualizing election data for social impact.',

	description : 'Working with the Lebanese Association for Democratic Elections, this project aimed to visualize important datasets critical to election reform. <br> Three datasets were chosen by the organization: the number of white ballots per electoral district, the balance of parliamentary seats per districts and the voter registration trends per confession. Since the Lebanese parliament is ',
    
     summary : {
    	date : '2013',
    	methods : ['Web Design', 'Information Visualization'],
    	technology : ['TileMill' , 'Mapbox', 'HTML5 & CSS']
    },

    images : [
        '/images/rigby.png'
    ]
}

exports.lamba = {

	    title : 'Lamba Labs',

	    tagline : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet neque est. Quisque eu rutrum ante.',

		description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet neque est. Quisque eu rutrum ante. Quisque gravida, sapien eu porttitor tincidunt, odio magna placerat felis, at condimentum metus augue eu lorem. Aenean condimentum lorem eget nulla vehicula laoreet. Etiam ornare, leo eu rutrum sagittis, nibh mauris placerat leo, ac scelerisque neque lectus sit amet diam. In pellentesque ante non varius pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ultricies semper gravida. Vivamus fringilla lorem id iaculis euismod. Nullam ipsum nisi, dictum et dignissim at, fringilla ac quam. Maecenas nunc elit, vestibulum sit amet ornare at, laoreet at mauris. Praesent faucibus turpis id ante facilisis, id mattis erat vestibulum. Suspendisse lobortis porta odio, lacinia',
	    
	     summary : {
	    	date : '2013'
	    },

	    images : [
	        '/images/rigby.png'
	    ]
}

exports.picospaces = {
	title : 'Pico Spaces',

	tagline : 'Turn any surface into a touch screen with cheap, recycled material',

	description : 'fasfa',

	summary : {
		date : '2011-2012',
		awards : ['Murex Software Award', 'Deans Award for Creativity'],
		team : ['Marc Farra', 'Mohammad Mehanna'], 
		role : ['Computer Vision and GUI'],
		methods : ['Computer Vision', 'GUI design'],
		technology : ['OpenCV']
	}, 
	images : []
}

exports.grow = {
	title : 'Grow',

	tagline : 'An iPad magazine for the Urban, indoor gardener.',

	description : 'fasfa',

	summary : {
		date : '2013',
		methods : ['Competitive Analysis',' Visual Design', 'Critique'],
		technology : ['Indesign']
	}, 
	images : []
}

exports.haydara2yna = {
	title : 'Hayda Ra2yna',

	tagline : 'An iPad magazine for the Urban, indoor gardener.',

	description : 'fasfa',

	summary : {
		date : '2013',
		methods : ['Competitive Analysis',' Visual Design', 'Critique'],
		technology : ['Indesign']
	}, 
	images : []
}
