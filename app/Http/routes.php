<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
	return $app->welcome();
});

$app->get('api/users', function() {
	return \App\Models\User::all();
});

$app->get('api/clients', function() {
	return \App\Models\Client::all();
});

$app->get('api/projects', function() {
	return \App\Models\Project::all();
});

$app->get('api/releases', function() {
	return \App\Models\Release::all();
});