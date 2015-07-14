<?php

namespace App\Http\Controllers;

use App\Models\Release;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class ReleaseController extends Controller {

	public function index(){

		$releases = Release::all();

		return response()->json($releases);
	}

	public function getRelease($id) {

		$release = Release::find($id);

		return response()->json($release);
	}

	public function createRelease(Request $request) {

		$release = Release::create($request->all());

		return response()->json($release);
	}

	public function deleteRelease($id) {
		$release = Release::find($id);
		$release->delete();
 
		return response()->json('deleted');
	}

	public function updateRelease(Request $request, $id) {
		$release= Release::find($id);
		$release->link = $request->input('link');
		$release->version = $request->input('version');
		$release->release_note = $request->input('release_note');
		$release->image_links = $request->input('image_links');
		$release->phase = $request->input('phase');
		$release->platform = $request->input('platform');
		$release->uploader_id = $request->input('uploader_id');
		$release->project_id = $request->input('project_id');

		$release->save();

		return response()->json($release);
	}

	public function getiOSReleases($project_id) {
		$releases = Release::where('project_id', $project_id)
			->where('platform', 'iOS')
			->orderBy('version', 'desc')
			->get();

		return $releases;
	}

	public function getAndroidReleases($project_id) {
		$releases = Release::where('project_id', $project_id)
			->where('platform', 'Android')
			->orderBy('version', 'desc')
			->get();

		return $releases;
	}

	public function getReleases($project_id) {
		$releases = array(
			'ios' => $this->getiOSReleases($project_id),
			'android' => $this->getAndroidReleases($project_id)
		);

		return $releases;
	}
}