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
			'title' => 'SampleStore',
			'logo' => 'https://www.samplestore.com/skin/frontend/default/samplestore/images/logo.png',
			'tag' => '["shop", "sample"]',
			'client_id' => '1',
		 ]);	
	}
}