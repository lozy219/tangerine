<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class ClientController extends Controller {

	public function index(){

		$clients = Client::all();

		return response()->json($clients);
	}

	public function getClient($id) {

		$client = Client::find($id);

		return response()->json($client);
	}

	public function createClient(Request $request) {

		$client = Client::create($request->all());

		return response()->json($client);
	}

	public function deleteClient($id) {
		$client = Book::find($id);
		$client->delete();
 
		return response()->json('deleted');
	}

	public function updateClient(Request $request, $id) {
		$client= Client::find($id);
		$client->name = $request->input('name');

		$client->save();

		return response()->json($client);
	}

	public function updateClientPassword(Request $request, $id) {
		$client= Client::find($id);
		// hash needed
		$client->password = $request->input('password');

		$client->save();
		
		return response()->json($client);
	}
}