<?php
require_once( 'php/config.php' );
require_once( 'php/openid.php' );


try {
    # Change 'localhost' to your domain name.
    $openid = new LightOpenID( $domain );
    if( !$openid->mode ) {
        if( isset( $_GET['login'] ) ) {
        	$openid->identity = 'https://www.google.com/accounts/o8/id';
			$openid->required = array( 'namePerson/friendly', 'contact/email' );
			header( 'Location: ' . $openid->authUrl() );
		}
?>

<form action="?login" method="post">
    <button>Login with Google</button>
</form>

<?php
    } elseif( $openid->mode == 'cancel' ) {
        echo 'User has canceled authentication!';
    } else {
    	// Logged in successfully
        require_once( 'main.html' );
    }
	
} catch( ErrorException $e ) {
    echo $e->getMessage();
}
