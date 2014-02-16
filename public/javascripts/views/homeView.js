define(['app', 'text!templates/home.tpl'], function(app, homeTemplate){
	app.HomeView = Ember.View.extend({
		templateName: '',
		template: Ember.Handlebars.compile(homeTemplate)
	})
})