define(["routes/router", "controllers/applicationController", "views/applicationView"], 
	function(router, applicationController, applicationView){
	var App = {
		ApplicationView: applicationView,
		ApplicationController: applicationController,
		Router: router,
		ApplicationRoute: Ember.Route.extend({
			renderTemplate: function(){
				this.render('application')

				this.render('photoFrame', {
					into: 'application',
					outlet: 'main'
				})
				this.render('navigation', {
					into: 'application',
					outlet: 'navBar'
				})
			}
		})
	}

	return App
})