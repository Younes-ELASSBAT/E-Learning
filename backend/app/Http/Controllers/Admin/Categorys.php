<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class Categorys extends Controller
{
    public function index(){
        return Category::all();
    }

    public function find($id){
        $category =Category::find($id);
        return response()->json($category,201);
    }

    public function show(Category $category){
        $courses=$category->courses()->get();
        return response()->json([$category,$courses],201);
    }

    public function ajouter(Request $request){
        $request->validate([
          'name'=>'required|string|max:255',
        ]);
        $category =Category::Create([
            'name'=>$request->name,
        ]);
        return response()->json($category  ,201 );
    
    }

    
    public function update(Request $request,Category $category){
        $request->validate([
            'name'=>'required|string|max:255',
        ]);
        $category->update([
            'name'=>$request->name,
        ]);
        return response()->json($category);
    }

    
   

    
    public function delete(Category $category){
        $category->delete();
        return response()->json(['message'=>'Category deleted successfully']);
    }
}