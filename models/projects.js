exports.projects_overview = [

	// Data extraction and semantics
	{'name':'ThingsJS', 'url':'things', 'img':'icons/sensors.png'},
	{'name':'Rigby', 'url':'rigby','img':'icons/rigbyg.png'},
	{'name':'Lebanon Election Data', 'url':'lade', 'img':'icons/mem2.png'},
	{'name':'Flock', 'url':'flock', 'img': 'flock/flocklogo.png'},	
	{'name':'Hayda Ra2yna', 'url':'haydara2yna', 'img':'icons/lade.png'},
	{'name':'Memory Shells', 'url':'memory', 'img':'icons/memg.png'}, 

	{'name':'Poster', 'url':'avantgarde', 'img':'icons/posterg.png'},
	{'name':'Grow', 'url':'grow'},
	{'name':'Nour', 'url':'nour', 'img':'icons/nour.jpg'},
	{'name':'Pixelate Me', 'url':'pixelateme', 'img':'icons/pm.png'},
	{'name':'Generative Art Experiments', 'url':'genart'},


	// Open Data
	{'name':'Lamba Labs', 'url':'lamba', 'img':'icons/lamba.jpg'},
	{'name':'Open Data Platform', 'url':'lamba'},


	// Visual and Interaction Design
	{'name':'Grow', 'url':'grow'},
	// {'name':'PicoSpaces', 'url':'picospaces'}, //

	// APPS? 

	// Hardware Hacking
	{'name':'Pixelate Me', 'url':'pixelateme', 'img':'icons/pixme.jpg'},
	// {'name':'Whisker', 'url':'lamba'},	

	// Computational Art
	{'name':'Generative Art Experiments', 'url':'lamba'}


];


exports.play_overview = [

	{'name':'Grow', 'url':'grow'},
	{'name':'PicoSpaces', 'url':'picospaces'}, //
	{'name':'Hayda Ra2yna', 'url':'lade'},
	{'name':'Whisker', 'url':'lamba'},	
	{'name':'Flock', 'url':'flock'},//
	{'name':'Nour', 'url':'nour'},
	{'name':'Poster', 'url':'avantgarde'},
	{'name':'Pixelate Me', 'url':'pixelateme'},
	{'name':'Generative Art Experiments', 'url':'lamba'}

];

exports.rigby = {

	    title : 'Rigby',

	    tagline : 'Representing colors associated to context',

		description : ' Rigby.io was built to answer the question of how to reliably share color palettes representing a certain environment. By juxtaposing an image dragged in by the user with its color palette, context is associated with the derived spectra. <br> The application was built using HTML5 APIs and underscore.js. Using the file API as well as building a custom machine vision algorithm allows for the color palette generation to be offloaded to the client for efficiency. ',
	    
	    summary : {
	    	date : '2013',
	    	methods : ['Web Development', 'Computer Vision'],
	    	technology : ['HTML5 File Api', 'Canvas', 'Backbone']
	    },

	    images : [
	        'rigby/rigby_s3.png','rigby/rigby_s4.png','rigby/rigby_s5.png'
	    ],

	    captions : [
		    {'index':1, 'txt': 'How do we bridge the gap between the number ... and the brisk color of the sea on a sunny Sunday morning? Rigby tries to create an alternate color picker that maintains the semantics and emotions inherent to colors.'},
		    {'index':2, 'txt': 'In the browser, the most salient colors in an image are derived and displayed side by side with the image to create a color palette that maintains the emotions and semantics the user intended by association.'},
		    {'index':3, 'txt': 'The user can select the number of colors in a palette and the format of colors. Colors are copied on click, or the palette can be downloaded.'},
			{'index':4, 'txt ': 'The project was an experiment with the capabilities of front end applications and uses HTML5 technology. The File API is used to read the user\'s image file. The image is kept local where computer vision algorithms run in canvas are able to obtain salient colors. AI, css and sass files are generated locally with the color data to be downloaded.'}
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
        'rigby.png'
    ]
}



exports.lade = {

    title : 'LebElect Platform',

    tagline : 'Visualizing election data for social impact.',

	description : 'Working with the Lebanese Association for Democratic Elections, this project aimed to visualize important datasets critical to election reform. <br> Three datasets were chosen by the organization: the number of white ballots per electoral district, the balance of parliamentary seats per districts and the voter registration trends per confession. Since the Lebanese parliament is ',
    
     summary : {
    	date : '2013',
    	methods : ['Web Design', 'Information \<br> Visualization'],
    	technology : ['TileMill' , 'Mapbox', 'LeafletJS', 'HTML5 & CSS'],
	    clients : ['Democray International','http://democracyinternational.com/', 'Lebanese Association for Democratic Elections', 'http://www.lade.org.lb/?lang=en-US'],

    },


    images : [
       'lade1.png','lade-r1.png','lade-w1.png'
    ], 

    captions : [
    	{ 'index' : 1, txt : 'Democracy International and LADE aim to promote transparency and accountability for governments. For this project, we cleaned and, hosted and visualized Electoral Data in Lebanon.'},
    	{ 'index' : 2, txt : 'The first graph visualizes white ballots in Lebanon. The difficulty was visualized the information on a map with small districts becoming eligible for certain zoom levels. To maintain eligibility, I designed interactive markers based on zoom levels using LeafletJS. '},
    	{ 'index' : 3, txt : 'The second graph visualizes voting power in Lebanon. The graph was compiled in Tilemill. Colors were selected to emphasize the wide range of spectrum of voting powers in Lebanon.'}
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
	        'rigby.png'
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
	images : [
'pico-team2.jpg'
	]
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

exports.nour = {
	title : 'Nour',

	tagline : 'Wearable LED matrices for displaying graphics and realtime tweets in protests.',

	description : 'fasfa',

	summary : {
		date : '2013',
		methods : ['Physical Computing','Computer Vision'],
		technology : ['Matlab', 'Arduino']
	}, 
	images : [
		'nour1.jpg', 'nour2.jpg', 'nour3.jpg', 'nour4.jpg'
	],

	captions : [
		{'index':1, 'txt': 'This project was a collaboration with a graphic designer, Nour Chammoun. The objective was to embed an LED matrix into a shirt to be used for visualizing graphical animations during social protests, as opposed to carrying static banners.'},
		{'index':3, 'txt' : 'Nour\'s graphical animations are scanned and parsed in Matlab to create boolean arrays to control each LED in the matrix. We built a 256 LED matrix and hope to upgrade the shirt to a 1024 LED matrix to display for more detailed graphics.'}
	]
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

exports.avantgarde = {
	title : 'Avant Garde Poster',

	tagline : 'An iPad magazine for the Urban, indoor gardener.',

	description : 'fasfa',

	summary : {
		date : '2013',
		methods : ['Visual Design', 'Sketching', 'Critique'],
		technology : ['Indesign']
	}, 
	images : ['avposter5.png', 'avposter.jpg'],
	captions: [
		{'index':1, 'txt': 'This Avant Garde Poster was designed as an assignment for my Interaction Design class in Carnegie Mellon. The purpose was to display good information hierarchy in an information dense poster, while grabbing passerby attention and maintaining some visual association with the theme of Avant Garde Architecture.'}
	]
}

exports.flock = {
	title : 'Flock',

	tagline : 'An iPad magazine for the Urban, indoor gardener.',

	description : 'fasfa',

	summary : {
		date : '2013',
		methods : ['Visual Design', 'Sketching', 'Critique'],
		technology : ['Indesign']
	}, 
	images : ['flock/flocklogo.png', 'avposter.jpg','avposter.jpg'],
	captions: [
		{'index':1, 'txt': 'I’m at an event with hundred of attendees. Wouldn’t it be nice if I could see exactly who was at the event, and connect with people of similar interest? Every day, we pass by hundreds of people. So many missed opportunities for possible connections, collaborations and relationships.'},
		{'index':2, 'txt': 'Flock is a physical linkldn. It connects like-minded people based on their current location and allows for dynamic location based chat sessions based on interest. '},
		{'index':3, 'txt': 'We used the FourSquare API to get the current location of the user.  At a location, a user can create dynamic chat sessions with a subset of users based on their profile data (ex. interests, occupation).  Real time messaging was implemented using Firebase databases. The front end architecture was designed using Backbone and Sass for design. The app was implemented in HackNY in less than 14 hours.'}
	]
}

exports.pixelateme = {
	title : 'Pixelate Me',

	tagline : 'Capturing data from random passerbys.',

	description : 'fasfa',

	summary : {
		date : '2013',
		methods : ['Visual Design', 'Sketching', 'Critique'],
		technology : ['Indesign']
	}, 
	images : ['pixelateme/pix1.jpg', 'pixelateme/pix2.jpg','pixelateme/pix3.jpg'],
	captions: [
		{'index':1, 'txt': 'Pixelate Me is a simple digital installation that detects passerbys and projects a 3D pixelated image of them. The project was displayed in <b>TedX Beirut</b> social space and the opening of <b>Geek Express</b> to create a fun interactive digital environment for passerbys.'},
	]
}

