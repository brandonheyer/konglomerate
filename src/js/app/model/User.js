define( [
	'underscore',
	'backbone',
	'ns/app',
	
	'ns/app.model'
], function( _, backbone, app ) {
	
	app.model.User = Backbone.Model.extend( {
		urlRoot: 'request.php/user',
		
		defaults: {
			id: -1,
			email: ''
		}
	} );
	
	return app.model.User;	
} )
