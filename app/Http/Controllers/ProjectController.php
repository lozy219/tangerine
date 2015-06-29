<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class ProjectController extends Controller {

	public function index(){

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
}