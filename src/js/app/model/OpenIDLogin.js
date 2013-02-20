define( [
	'underscore',
	'backbone',
	'ns/app',
	
	'ns/app.model',
	
	'app/model/User',
	'app/model/Login'
], function( _, backbone, app ) {
	
	app.model.OpenIDLogin = app.model.Login.extend( {
		urlRoot: 'request.php/openid',
		idAttribute: 'openID',
		
		defaults: function() {
			var defaults = app.model.Login.prototype.defaults;
			
			defaults.openID = -1;
			
			return defaults;
		}
	} );
	
	return app.model.OpenIDLogin;	
} )
