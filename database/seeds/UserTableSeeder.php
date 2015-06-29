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
			'name' => 'Jiang Zemin',
			'email' => 'haha@qq.com',
			'password' => '123456',
		 ]);
		User::create([
			'name' => 'Song Zuying',
			'email' => 'echx.io@gmail.com',
			'password' => '123456',
		]);
		User::create([
			'name' => 'Wang Jinghan',
			'email' => 'phantom.there@gmail.com',
			'password' => '123456',
		]);
	}
}
