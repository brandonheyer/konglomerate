require.config( {
	baseUrl: 'js',
	paths: {
		jquery: 'lib/jquery',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone'
	}
});

require( [
	'jquery',
	'underscore',
	'backbone',
	'ns/app',
	
	'app/view/AppView'
], function( $, _, Backbone, app) {	
	$( document ).ready( function() {
		var appView = new app.view.AppView();
		
		appView.render();
	} );

} );