define(["app", "text!templates/navigation.tpl"], function(app, navigationTemplate){
	app.NavigationView = Ember.View.extend({
		templateName: "navigation",
		template: Ember.Handlebars.compile(navigationTemplate)
	})
})