<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReleasesTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create('releases', function (Blueprint $table) {
			$table->increments('id');
			$table->timestamps();

			$table->string('link');
			$table->string('version');
			$table->string('release_note');
			$table->string('image_links');
			$table->enum('phase', ['SIT', 'UAT', 'Production']);
			$table->enum('platform', ['iOS', 'Android']);
			
			$table->integer('uploader_id')->unsigned();
			$table->foreign('uploader_id')->references('id')->on('users');

			$table->integer('project_id')->unsigned();
			$table->foreign('project_id')->references('id')->on('projects');

		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		Schema::drop('releases');
	}
}
