<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class ProjectController extends Controller {

	public function index() {

		$projects = Project::all();

		return response()->json($projects);
	}

	public function getProject($id) {

		$project = Project::find($id);

		return response()->json($project);
	}

	public function createProject(Request $request) {

		$project = Project::create($request->all());

		return response()->json($project);
	}

	public function deleteProject($id) {
		$project = Project::find($id);
		$project->delete();
 
		return response()->json('deleted');
	}

	public function updateProject(Request $request, $id) {
		$project= Project::find($id);
		$project->title = $request->input('title');
		$project->logo = $request->input('logo');
		$project->tag = $request->input('tag');

		$project->save();

		return response()->json($project);
	}

	public function getFullProject() {
		$release_controller = new ReleaseController;
		$client_controller = new ClientController;
		$projects = Project::all();

		foreach ($projects as $project) {
			$releases = $release_controller->getReleasesByProjectId($project['id']);
			$project['release'] = $releases;

			$client = $client_controller->getClientById($project['client_id']);
			$project['client'] = $client['name'];
		}

		return response()->json($projects);
	}

	public function getProjectByName($project_name) {
		$project = Project::where('title', $project_name)->first();
		return $project;
	}

	public function findOrCreateProjectName($project_name) {
		$project = $this->getProjectByName($project_name);
		if ($project) {
			return $project;
		} else {
			return Project::create([
				'title' => $project_name,
				'logo' => '',
				'tag' => '[]',
				'key' => str_shuffle(MD5(microtime())),
				'client_id' => '1',
			]);
		}
	}
}