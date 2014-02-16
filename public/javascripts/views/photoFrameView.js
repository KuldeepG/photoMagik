define(["app", "text!templates/photoFrame.tpl"], function(app, photoFrameViewTemplate){
	app.PhotoFrameView = Ember.View.extend({
		templateName: 'photoFrame',
		template: Ember.Handlebars.compile(photoFrameViewTemplate)
	})
})