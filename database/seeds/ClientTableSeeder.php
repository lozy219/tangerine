<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Models\Client;

class ClientTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		// here is the default client, will use this until we implement the client part
		Client::create([
			'name' => 'Codigo',
			'password' => '123456',
		 ]);
		Client::create([
			'name' => 'James Si',
			'password' => '123456',
		 ]);
		Client::create([
			'name' => 'Eric Tan',
			'password' => '123456',
		]);
	}
}
