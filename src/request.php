<?php
require_once( 'php/config.php' );
require_once( 'php/Slim/Slim.php' );
require_once( 'php/meekrodb.2.1.class.php' );

DB::$user = $database_user;
DB::$password = $database_password;
DB::$dbName = $database_name;


\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
/**
 * Sample get test
 */

$app->get( '/hello/:name', function ( $name ) {
    echo "Hello, $name";
} );


/**
 * Uncomment the following three blocks and make sure your database is setup
 * to store user google openID information into the database.
 * 
 * A mysql file will eventually be included with the basic structure
 */
 
/*
function getLoginUser( $uid ) {
	$response = Array();
	$response[ 'user' ] = DB::queryFirstRow( 'SELECT * FROM users WHERE id=%s', $uid );
	$response[ 'cells' ] = DB::query( 'SELECT * FROM cells WHERE owner=%s', $uid );
	return $response;
}

$app->get( '/openid/:id', function( $id ) {
	$uid = DB::queryFirstField( 'SELECT uid FROM openid_to_uid WHERE openid=%s', $id );

	echo json_encode( getLoginUser( $uid ) );
} );

$app->put( '/openid/:id', function( $id ) {
	global $app;
	
	$req = $app->request();
	$body = json_decode( $req->getBody(), true );
	
	// Verify user doesn't exist
	$uid = DB::queryFirstField( 'SELECT uid FROM openid_to_uid WHERE openid=%s', $id );
	
	if ( !$uid ) {
		DB::insert( 'users', array(
			'email' => $body[ 'email' ]
		));
		
		$uid = DB::insertId();
		
		DB::insert( 'openid_to_uid', array( 
			'openid' => $body[ 'openid' ],
			'uid' => $uid
		));	
	}
		
	echo json_encode( getLoginUser( $uid ) );
} );
*/ 

$app->run();