define(['app'], function(app){
	app.NavigationController = Ember.ObjectController.extend({
		actions: {
			fileMenu: function(){
				console.log("file menu clicked")
			},
			helpMenu: function(){
				console.log("help menu clicked")
			}
		}
	})
})