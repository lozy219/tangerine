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
			'name' => 'test user 2',
			'email' => 'test1@codigo.sg',
			'password' => '123456'
		 ]);
		User::create([
			'name' => 'test user 2',
			'email' => 'test2@codigo.sg',
			'password' => '123456'
		]);
		User::create([
			'name' => 'test user 3',
			'email' => 'test3@codigo.sg',
			'password' => '123456',
		]);
	}
}
