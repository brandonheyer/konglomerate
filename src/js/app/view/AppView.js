define( [
	'underscore',
	'backbone',
	'ns/app',
	
	'ns/app.view',
	
	'app/view/BaseView',
	
	'app/model/OpenIDLogin'
], function( _, backbone, app ) {
	
	app.view.AppView = app.view.BaseView.extend( {
		user: undefined,
		login: undefined,
		
		className: 'row',
		
		postLogin: function() {
			//NOT PART OF VIEW
			//$( '.user-info' ).append( '<h3>' + this.user.get( 'email' ) + '</h3>' );
		},
		
		initialize: function() {
			/*var parts = window.location.search.substr(1).split("&"),
				$_GET = {},
				temp, i;
			
			for (i = 0; i < parts.length; i++) {
			    temp = parts[i].split("=");
			    $_GET[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
			}
			
			this.login = new app.model.OpenIDLogin( {
				'openID': $_GET[ 'openid.claimed_id' ].replace( 'https://www.google.com/accounts/o8/id?id=', '' )
			} );
			
			this.login.on( 'user-ready', function( event ) {
				this.user = event.get( 'user' );
				this.postLogin();
			}, this );*/
		},
		
		render: function() {
			$( 'body' ).append( this.$el );
			this.$el.append( 'success' );
			
			//this.login.fetch();	
		}
	} );
	
	return app.view.AppView;	
} );
