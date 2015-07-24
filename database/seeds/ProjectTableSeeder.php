<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Models\Project;

class ProjectTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		Project::create([
			'title' => 'Dummy Project',
			'logo' => 'http://we.dont.need.this',
			'tag' => '["and", "this"]',
			'key' => str_shuffle(MD5(microtime())),
			'client_id' => '2',
		 ]);	
	}
}