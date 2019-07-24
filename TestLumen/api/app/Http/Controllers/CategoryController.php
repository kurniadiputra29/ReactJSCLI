<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = app('db')->table('category')->get();
        return response()->json($categories);
    }

    public function create(Request $request)
    {
    	// return response()->json($request->name);

    	$data = [
    		'name' => $request->name
    	];

    	app('db')->table('category')->insert($data);
    }
    public function delete($id)
    {
    	// return response()->json($id);

    	app('db')->table('category')->where('id', $id)->delete();
    }
}
