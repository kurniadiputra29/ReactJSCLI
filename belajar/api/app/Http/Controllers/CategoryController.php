<?php

namespace App\Http\Controllers;

class CategoryController extends Controller
{
   public function index()
   {
       $categories = app('db')->table('category')->get();
       return response()->json($categories);
   }
}
