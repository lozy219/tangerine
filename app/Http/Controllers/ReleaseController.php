<?php

namespace App\Http\Controllers;

use App\Models\Release;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Distribution\IpaDistribution;


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

		// $release = Release::create($request->all());

		// return response()->json($release);

		$version = $request->input('version');
		$file = $request->file('file');
		$file_name = $file->getClientOriginalName();
		$product_name = substr($file_name, 0, strlen($file_name)  - 4);
		$path = 'download/' . $product_name . '/';

		if (substr($file_name, -3) == "apk") {
			$path = $path . 'Android' . '/' . $version;
			$file->move($path, $file_name);
			$path = $path . '/' . $file_name;
		} else if (substr($file_name, -3) == "ipa") {
			$path = $path . 'iOS' . '/' . $version;
			$file->move($path, $file_name);
			$path = $path . '/' . $file_name;
			$ipa = new IpaDistribution($path);
		}

		return json_encode('ok');
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

	public function getiOSReleasesByProjectId($project_id) {
		$releases = Release::where('project_id', $project_id)
			->where('platform', 'iOS')
			->orderBy('version', 'desc')
			->get();

		return $releases;
	}

	public function getAndroidReleasesByProjectId($project_id) {
		$releases = Release::where('project_id', $project_id)
			->where('platform', 'Android')
			->orderBy('version', 'desc')
			->get();

		return $releases;
	}

	public function getReleasesByProjectId($project_id) {
		$ios = $this->getiOSReleasesByProjectId($project_id);
		$android = $this->getAndroidReleasesByProjectId($project_id);
		$releases = array();

		if (count($ios) > 0) {
			$releases['ios'] = $ios;
		}

		if (count($android) > 0) {
			$releases['android'] = $android;
		}

		return $releases;
	}
}