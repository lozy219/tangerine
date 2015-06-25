<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class UserTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		User::create([
			'name' => 'James Tan',
			'email' => 'james@codigo.sg',
			'password' => '123456',
		 ]);
		User::create([
			'name' => 'Eric Si',
			'email' => 'eric.si@codigo.sg',
			'password' => '123456',
		]);
	}
}
