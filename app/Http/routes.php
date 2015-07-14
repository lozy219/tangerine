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

$app->group(['prefix' => 'api', 'namespace' => 'App\Http\Controllers'], function ($app) {
	$app->get('client', 'ClientController@index');
	$app->get('client/{id}', 'ClientController@getClient');
	$app->post('client', 'ClientController@createClient');
	$app->put('client/{id}', 'ClientController@updateClient');
	$app->delete('client/{id}', 'ClientController@deleteClient');

	$app->get('user', 'UserController@index');
	$app->get('user/{id}', 'UserController@getUser');
	$app->post('user', 'UserController@createUser');
	$app->put('user/{id}', 'UserController@updateUser');
	$app->delete('user/{id}', 'UserController@deleteUser');

	$app->get('project', 'ProjectController@index');
	$app->get('project/{id}', 'ProjectController@getProject');
	$app->post('project', 'ProjectController@createProject');
	$app->put('project/{id}', 'ProjectController@updateProject');
	$app->delete('project/{id}', 'ProjectController@deleteProject');
	$app->get('project_with_release', 'ProjectController@getProjectWithReleases');

	$app->get('release', 'ReleaseController@index');
	$app->get('release/{id}', 'ReleaseController@getRelease');
	$app->post('release', 'ReleaseController@createRelease');
	$app->put('release/{id}', 'ReleaseController@updateRelease');
	$app->delete('release/{id}', 'ReleaseController@deleteRelease');
});