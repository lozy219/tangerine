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
		Client::create([
			'name' => 'James Tan',
			'password' => '123456',
		 ]);
		Client::create([
			'name' => 'Eric Si',
			'password' => '123456',
		]);
		Client::create([
			'name' => 'Singpost',
			'password' => '123456',
		]);
	}
}
