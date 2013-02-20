define( [
	'underscore',
	'backbone',
	'ns/app',
	
	'ns/app.model'
], function( _, backbone, app ) {
	
	app.model.Login = Backbone.Model.extend( {
		urlRoot: 'request.php/login',
		
		defaults: {
			id: -1,
			user: undefined,
			cells: []
		},
		
		initialize: function() {
			this.on( 'change:user', this.onUserChange, this );
		},
		
		onUserChange: function() {
			this.off( 'change:user', this.onUserChange, this );
			
			var user = new app.model.User(
				this.get( 'user' )
			);
			
			this.set( 'user', user );
			
			this.trigger( 'user-ready', this );
		}
	} );
	
	return app.model.Login;	
} )
