requirejs.config({
	baseUrl: "javascripts",
	waitSeconds: 180,
	paths: {
		handlebars: "lib/handlebars-v1.2.1",
		underscore: "lib/underscore-min",
		Q: "lib/q.min",
	    text: 'lib/text-loader-plugin',
	    Ember: 'lib/ember',
	    jquery: 'lib/jquery-1.9.1.min'
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'handlebars': {
			exports: 'Handlebars'
		},
		'Q': {
			exports: 'Q'
		},
		'Ember' : {
			deps: ['handlebars', 'jquery']
		},
		'app' : {
			deps: ['Ember']
		}
	}	
})

requirejs(["Q", "underscore"])

define(["handlebars", "app", "controllers/photoFrameController", 
	"views/photoFrameView", "controllers/navigationController", 
	"views/navigationView"], 
function(Handlebars, app){
	app = Ember.Application.create(app)
})