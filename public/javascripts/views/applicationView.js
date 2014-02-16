define(["text!templates/application.tpl"], function(applicationTemplate){
	var template = Ember.Handlebars.compile(applicationTemplate)
	return Ember.View.extend({
		template: template,
		templateName: "application"
	})
})