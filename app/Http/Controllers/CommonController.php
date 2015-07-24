<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class CommonController extends Controller {

	public function authenticate(Request $request) {
		$data = array();
		$admin_password = $request->input('password');

		if ($admin_password == '6602d895a37f27eb01c13a89cb247edb') {
			$data['status'] = 1;
		} else {
			$data['status'] = 0;
		}
		
		return response()->json($data);
	}
}