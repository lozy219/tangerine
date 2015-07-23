<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Models\Release;

class ReleaseTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
		Release::create([
			'link' => '#dummy',
			'version' => '3.5',
			'release_note' => 'Nothing here',
			'image_links' => '["https://www.samplestore.com/skin/frontend/default/samplestore/images/logo.png"]',
			'phase' => 'UAT',
			'platform' => 'iOS',
			'uploader_id' => '2',
			'project_id' => '1'
		 ]);

		Release::create([
			'link' => '#dummy',
			'version' => '3.8',
			'release_note' => 'Nothing here',
			'image_links' => '["https://www.samplestore.com/skin/frontend/default/samplestore/images/logo.png"]',
			'phase' => 'UAT',
			'platform' => 'iOS',
			'uploader_id' => '2',
			'project_id' => '1'
		 ]);

		Release::create([
			'link' => '#dummy',
			'version' => '2.5',
			'release_note' => 'Nothing here',
			'image_links' => '["https://www.samplestore.com/skin/frontend/default/samplestore/images/logo.png"]',
			'phase' => 'UAT',
			'platform' => 'iOS',
			'uploader_id' => '2',
			'project_id' => '1'
		 ]);

		Release::create([
			'link' => '#dummy',
			'version' => '4.5',
			'release_note' => 'Nothing here',
			'image_links' => '["https://www.samplestore.com/skin/frontend/default/samplestore/images/logo.png"]',
			'phase' => 'UAT',
			'platform' => 'Android',
			'uploader_id' => '2',
			'project_id' => '1'
		 ]);
	}
}