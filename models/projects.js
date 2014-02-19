exports.projects_overview = [

	// Data extraction and semantics
	{'name':'ThingsJS', 'url':'things', 'img':'icons/sensors.png'},
	{'name':'Rigby', 'url':'rigby','img':'rigby/rigby_detail.png'},
	{'name':'Lebanon Election Data', 'url':'lade', 'img':'voter-power2.jpg'},
	{'name':'Flock', 'url':'flock', 'img': 'icons/flock2.png'},	
	{'name':'Hayda Ra2yna', 'url':'haydara2yna', 'img':'icons/haydag.png'},
	{'name':'Memory Shells', 'url':'memory', 'img':'icons/memg.png'}, 

	{'name':'Poster', 'url':'avantgarde', 'img':'icons/posterg.png'},
	{'name':'Grow', 'url':'grow','img':'icons/grow.jpg'},
	{'name':'Nour', 'url':'nour', 'img':'icons/nour.jpg'},
	{'name':'Pixelate Me', 'url':'pixelateme', 'img':'icons/pm.png'},
	{'name':'Generative Art Experiments', 'url':'genart'},


	// Open Data
	{'name':'Lamba Labs', 'url':'lamba', 'img':'icons/lamba.jpg'},

	{'name':'Constellations', 'url':'constellations','img':'icons/italy.png'},

	{'name':'Syria', 'url':'syria', 'img':'icons/syria.png'},

	// {'name':'Open Data Platform', 'url':'lamba'},


	// // Visual and Interaction Design
	// // {'name':'Grow', 'url':'grow'},
	// // {'name':'PicoSpaces', 'url':'picospaces'}, //

	// // APPS? 

	// // Hardware Hacking
	// {'name':'Pixelate Me', 'url':'pixelateme', 'img':'icons/pixme.jpg'},
	// // {'name':'Whisker', 'url':'lamba'},	

	// // Computational Art
	// {'name':'Generative Art Experiments', 'url':'lamba'}


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

    tagline : 'Associating colors with context. (<a href="http://rigby.io" id="site">rigby.io</a>)',

	description : ' Rigby.io was built to answer the question of how to reliably share color palettes representing a certain environment. By juxtaposing an image dragged in by the user with its color palette, context is associated with the derived spectra. <br> The application was built using HTML5 APIs and underscore.js. Using the file API as well as building a custom machine vision algorithm allows for the color palette generation to be offloaded to the client for efficiency. ',
    
    summary : {
    	date : '2013',
    	methods : ['Web Development', 'Computer Vision'],
    	technology : ['HTML5 File Api', 'Canvas', 'Backbone']
    },

    images : [
        'rigby/rigby_title.png','rigby/rigby_img.png', 'rigby/rigby_detail.png',
    ],

    captions : [
	    {'index':1, 'txt': 'Traditional color pickers lack semantics. Rigby tries to bridge the gap between machine colors and the colors that we experience.'},
	    {'index':2, 'txt': 'In the browser, the most salient colors are derived and displayed side by side with the target image to create a color palette that maintains the emotions and semantics the user intended by association.'},
		{'index':3, 'txt': 'The user can select the number of colors in a palette and the format of colors. Colors are copied on click, or the palette can be downloaded to share.'}
    ]
}

exports.constellations = {

    title : 'Constellation',

    tagline : 'Mapping half a million points in the browser. <a id="site" href="http://github.com/acrylc/constellation">code</a>   |   <a id="site" href="http://acrylc.github.io/constellation">site</a>',

	description : ' Rigby.io was built to answer the question of how to reliably share color palettes representing a certain environment. By juxtaposing an image dragged in by the user with its color palette, context is associated with the derived spectra. <br> The application was built using HTML5 APIs and underscore.js. Using the file API as well as building a custom machine vision algorithm allows for the color palette generation to be offloaded to the client for efficiency. ',
    
    summary : {
    	date : '2014',
    	methods : ['Mapping', 'Web Development', 'Data Cleaning'],
    	technology : ['Tilemill', 'MapboxJS', 'AWK']
    },

    images : [
        'constellations/const.png','icons/italy.png', 'constellations/italy2.png',
    ],

    captions : [
	    {'index':1, 'txt': 'This project was designed for the Interactive Art and Computational Design course at CMU, given by Prof. Golan Levin. The purpose was to map half a million points of hotel data. I was really interested in creating an interactive map in the browser, to see whether the browser could handle this amount of data. Hotel marker colors were set according to the rating, or stars, of a hotel.'},
	    {'index':2, 'txt': 'The visualized data fascinated me in that it seemed to recreate geographical borders. Major touristic cities such Rome and Paris seem to light up.'}
    ]
}

exports.syria = {

    title : 'Visualization of Syria',

    tagline : 'Visualizing the interests of the authors of "Syrian Civil War" Wikipedia page. <a id="site" href="http://github.com/acrylc/syria-visualization">code</a>   |   <a id="site" href="http://acrylc.github.io/syria-visualization">site</a>',

	description : ' Rigby.io was built to answer the question of how to reliably share color palettes representing a certain environment. By juxtaposing an image dragged in by the user with its color palette, context is associated with the derived spectra. <br> The application was built using HTML5 APIs and underscore.js. Using the file API as well as building a custom machine vision algorithm allows for the color palette generation to be offloaded to the client for efficiency. ',
    
    summary : {
    	date : '2014',
    	methods : ['Data Visualization', 'Web Development', 'Data Cleaning'],
    	technology : ['D3.JS', 'MapboxJS', 'AWK']
    },

    images : [
        'syria/cover.png','syria/1000titles.png',
    ],

    captions : [
	    {'index':1, 'txt': 'This project was designed for the Interactive Art and Computational Design course at CMU, given by Golan Levin. The purpose was to scrape and visualize data from an online source. Due to the controvery and frequent editing of the Syrian Civil War Wikipedia page, I was interested in visualizing the authors of this page. I was interested in seeing whether their interests could illuminate some patterns or key themese to the war.'},
	    {'index':2, 'txt': 'When displaying 1000 points of interest, the browser could no longer handle an interactive visualization, but the output in my opinion was beautiful.'},
    ]
}



exports.things = {

    title : 'ThingsJS',

    tagline : 'Building a toolking of web components for the Internet of Things.',

	description : ' Rigby.io was built to answer the question of how to reliably share color palettes representing a certain environment. By juxtaposing an image dragged in by the user with its color palette, context is associated with the derived spectra. <br> The application was built using HTML5 APIs and underscore.js. Using the file API as well as building a custom machine vision algorithm allows for the color palette generation to be offloaded to the client for efficiency. ',
    
    summary : {
    	date : '2014',
    	methods : ['Web Development', 'Physical Computing', 'Networks'],
    	technology : ['Polymer', 'Arduino', 'SocketIO']
    },

    images : [
        'icons/sensors.png','rigby/rigby_img.png', 'rigby/rigby_detail.png',
    ],

    captions : [
	    {'index':1, 'txt': 'ThingsJS is a toolkit for the internet of things. You can connect a fitbit, an Arduino or potentially any internet connected object to a web app with a simple API.'},
	    {'index':2, 'txt': 'You can write html tags such as <led pin="6"></led> and it would connect that DOM object to the arduino pin. The tag also has properties such as .value and .onValueChanged that can be accessed through Javascript.'},
		{'index':3, 'txt': 'On the arduino, you simply need to upload the thingsJS script that communicates with the server. The server is written in NodeJS and Socket.IO. The HTML API uses Google’s polymer-project to write custom HTML tags.'}
    ]
}



exports.memory = {

    title : 'Memory Shells',

    tagline : 'At the intersection of data and memory.',

	description : 'Working with the Lebanese Association for Democratic Elections, this project aimed to visualize important datasets critical to election reform. <br> Three datasets were chosen by the organization: the number of white ballots per electoral district, the balance of parliamentary seats per districts and the voter registration trends per confession. Since the Lebanese parliament is ',
    
     summary : {
    	date : '2013',
    	methods : ['Computer Vision', 'Audio Processing', 'Design', 'Research'],
    	technology : ['OpenFrameworks' , 'Raspberry']
    },


    images : [
       'mem.png','probability_values.jpg'
    ], 

    captions : [
    	{ 'index' : 1, txt : 'Memory shells was built for the Making Things Interactive course at CMU. I wanted to investigate how we distort our memory of previous events and the value of this distortion in creating a narrative. I used audio as the primary source of distortion. The audience listens to audio of memorable and nostalgic events taken from pop culture, news and speeches. The audio is slowly modified by their facial expressions to create a narrative that attempts to approximate collective memory.'},
    	{ 'index' : 2, txt : 'The system consists of of a central box and a ‘seashell’. A Raspberry Pi connected to a webcam tracks the user’s face and sends frames to a local server. I use openFrameworks to determine a set of probability values to select the next track. To include the ‘emotional bias’ of the user in the track, we change the volume and add noise to the track using SoX. Websockets are used for the message passing backend.'}
	]
}



exports.lade = {

    title : 'LebElect Platform',

    tagline : 'Visualizing election data for social impact. <a href="http://github.com/acrylc/lebElectoralMaps" id="site"> code </a>| sites: <a href="http://ladeleb.github.io/platform/white_ballots.html" id="site">White Ballots Map</a> | <a href="http://ladeleb.github.io/platform/vote_power.html" id="site">Voter Power Map</a>',

	description : 'Working with the Lebanese Association for Democratic Elections, this project aimed to visualize important datasets critical to election reform. <br> Three datasets were chosen by the organization: the number of white ballots per electoral district, the balance of parliamentary seats per districts and the voter registration trends per confession. Since the Lebanese parliament is ',
    
     summary : {
    	date : '2014',
    	methods : ['Web Design', 'Information Visualization'],
    	technology : ['Mapbox', 'LeafletJS', 'HTML5 & CSS'],
	    clients : ['Democray International','http://democracyinternational.com/', 'Lebanese Association for Democratic Elections', 'http://www.lade.org.lb/?lang=en-US'],

    },


    images : [
       'voter-power2.jpg','lade-w1.png','lade-r1.png'
    ], 

    captions : [
    	{ 'index' : 1, txt : 'Democracy International and LADE aim to promote transparency and accountability for governments. For this project, we cleaned, hosted and visualized Electoral Data in Lebanon.'},
    	{ 'index' : 2, txt : 'The first graph visualizes white ballots in Lebanon. The difficulty was visualizing the information on a map with small districts becoming eligible for certain zoom levels. To maintain eligibility, I designed interactive markers based on zoom levels using LeafletJS. '},
    	{ 'index' : 3, txt : 'The second graph visualizes voting power in Lebanon. The graph was compiled in Tilemill. Colors were selected to emphasize the wide range of spectrum of voting powers in Lebanon.'}
    ]
}

exports.lamba = {

	    title : 'Lamba Labs',

	    tagline : "Beirut's first Hackerspace. The first community of makers and artists in Lebanon, promoting interdisciplinary collaboration, maker spirit, open culture and transparency.",

		description : ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet neque est. Quisque eu rutrum ante. Quisque gravida, sapien eu porttitor tincidunt, odio magna placerat felis, at condimentum metus augue eu lorem. Aenean condimentum lorem eget nulla vehicula laoreet. Etiam ornare, leo eu rutrum sagittis, nibh mauris placerat leo, ac scelerisque neque lectus sit amet diam. In pellentesque ante non varius pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris ultricies semper gravida. Vivamus fringilla lorem id iaculis euismod. Nullam ipsum nisi, dictum et dignissim at, fringilla ac quam. Maecenas nunc elit, vestibulum sit amet ornare at, laoreet at mauris. Praesent faucibus turpis id ante facilisis, id mattis erat vestibulum. Suspendisse lobortis porta odio, lacinia',
	    
	     summary : {
	    	date : '2013'
	    },

	    images : [
	        'lamba/buildnight.jpg', 'lamba/maya_screen2.jpg', 'lamba/outpost.jpg', 'lamba/shapes.jpg', 'lamba/cow.jpg', 'lamba/wood.jpg'
	    ],
	    captions:[
	    	{'index':1,'txt':'Lamba Labs is Beirut’s first hackerspace. It is a place that joined artists, designers, hackers, programmers and makers from Beirut and contributed to growing the regions maker culture. '},
	    	{'index':2, 'txt':'Along with a few friends, we had a vision that we could join the small groups of isolated makers that congregated in Beirut. I was elected as the director of the space and my role was to oversee the daily operations. I also talked about the importance of maker culture and gave talks that promoted the importance of collaboration between art and technology in the maker process.'},
	    	{'index':3, 'txt':'Lamba Labs was in the press often because it was a new kind of space for Beirut, if not the region. It was featured in the leading regional press such as the Daily Star, Future TV, Al-Arabiya, Outpost and Wamda. '},
	    	{'index':4, 'txt':'The hackerspace was one of the only spaces in Beirut that had regular weekly workshops in everything from Arduino hacking to Kite building. I gave workshops in Processing and generative art. '}
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

	tagline : 'Designing an iPad App for urban, indoor gardening.',

	description : 'fasfa',

	summary : {
		date : '2013',
		methods : ['Design','Personas', 'Competitive Analysis'],
		technology : ['Indesign']
	}, 
	images : [
		'icons/grow.jpg',
	],

	captions : [
		{'index':1, 'txt': 'For my Interaction Design class at Carnegie Mellon, we were assigned to design an iPad app for an unmet market. Following a competitive market analysis, I found that most gardening websites were targeted at older, serious gardeners.  I decided on urban indoor gardeners'},
	]
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
		'nour/nour1.jpg', 'nour/nour2.jpg', 'nour/nour3.jpg', 'nour/nour4.jpg'
	],

	captions : [
		{'index':1, 'txt': 'This project was a collaboration with designer Nour Chammoun. The objective was to embed an LED matrix into a shirt to be used for visualizing graphical animations during social protests, as opposed to carrying static banners.'},
		{'index':3, 'txt' : 'Nour\'s graphical animations are scanned and parsed in Matlab to create boolean arrays to control each LED in the matrix. We built a 256 LED matrix and hope to upgrade the shirt to a 1024 LED matrix to display for more detailed graphics.'}
	]
}

exports.haydara2yna = {
	title : 'Hayda Ra2yna',

	tagline : 'Building a platform for public chatter around civic issues in Lebanon. <a href="https://github.com/acrylc/hayda-rayna" id="site">code</a> | <a href="http://pnpn.pw" id="site">site</a>',

	description : 'fasfa',

	summary : {
		date : '2014',
		methods : ['Frontend',' Web Design'],
		technology : ['TimelineJS', 'SASS', 'Backbone']
	}, 
	images : ['hayda.png','hayda.jpg', 'detail.png','timeline.png'],

	captions : [
		{'index':1, 'txt': 'I worked with the Social Media Exchange and Democracy International on a Platform for monitoring social media data around civic issues.'},
		{'index':2, 'txt' : 'The platform was designed to dynamically generate a web page for each civic issue topic. Each topic included a timeline, editorial content and a data stream of posts and chatter relating to it. '},
		{'index':3, 'txt': 'Since we were working with dynamic content, I used BackboneJS with express to generate pages, TimelineJS for the timelines and websockets for the data stream. The CMS for the topic data was custom built on top of google spreadsheets.'}
	]

}

exports.avantgarde = {
	title : 'Poster',

	tagline : 'Designed a poster for a Symposium on Avant Garde.',

	description : 'fasfa',

	summary : {
		date : '2013',
		methods : ['Visual Design', 'Sketching', 'Critique'],
		technology : ['Indesign']
	}, 
	images : ['poster/avp.png', 'poster/avposter.jpg'],
	captions: [
		{'index':1, 'txt': 'This Avant Garde Poster was designed as an assignment for my Interaction Design class in Carnegie Mellon. The purpose was to display good information hierarchy in an information dense poster, while grabbing passerby attention and maintaining some visual association with the theme of Avant Garde Architecture.'}
	]
}

exports.flock = {
	title : 'Flock',

	tagline : 'A webapp that connects likeminded people within physical vicinity. Implemented within 14 hours for HackNY.',

	description : 'fasfa',

	summary : {
		date : '2013',
		methods : ['Web Development', 'MVC', 'Websockets'],
		technology : ['SASS', 'Backbone', 'Firebase']
	}, 
	images : ['flock/flocklogo.png', 'chatmenu.jpg'],
	captions: [
		{'index':1, 'txt': 'At a hackathon or social event, wouldn’t it be nice if we could see exactly who was at the event and connect with people of similar interest? I believe that every day, we pass by hundreds of missed opportunities for possible connections, collaborations and relationships. Flock is a physical social network. It connects like-minded people based on their current location and allows for dynamic location based chat sessions based on interest.'},
		{'index':2, 'txt': ' We used the FourSquare API to get the current location of the user.  At a location, a user can create dynamic chat sessions with a subset of users based on their profile data (ex. interests, occupation).  Real time messaging was implemented using Firebase.. The front end architecture was designed using Backbone and SASS for design. The app was implemented in HackNY in less than 14 hours.'}
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

