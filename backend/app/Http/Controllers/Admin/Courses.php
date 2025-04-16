<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class Courses extends Controller
{
    public function index()
    {
        $courses = Course::all();
        return response()->json($courses, 201);
    }

    public function find($id)
    {
        $courses = Course::find($id);
        return response()->json($courses, 201);
    }

    public function ajouter(Request $request)
    {
        $request->validate([
            'image' => 'required|string',
            'titre' => 'required|string',
            'description' => 'required|string',
            'nombre_secsion' => 'required|integer',
            'nombre_heure' => 'required|integer',
            'category_id' => 'required|integer'
        ]);
        $couses = Course::create([
            'image' => $request->file('image'),
            'titre' => $request->titre,
            'description' => $request->description,
            'nombre_secsion' => $request->nombre_secsion,
            'nombre_heure' => $request->nombre_heure,
            'category_id' => $request->category_id
        ]);
        return response()->json($couses, 201);
    }

    public function update(request $request)
    {
        $request->validate([
            'image' => 'required|string',
            'titre' => 'required|string',
            'description' => 'required|string',
            'nombre_secsion' => 'required|integer',
            'nombre_heure' => 'required|integer',
            'category_id' => 'required|integer'
        ]);
        $couses = Course::update([
            'image' => $request->file('image'),
            'titre' => $request->titre,
            'description' => $request->description,
            'nombre_secsion' => $request->nombre_secsion,
            'nombre_heure' => $request->nombre_heure,
            'category_id' => $request->category_id
        ]);
        return response()->json($couses, 201);
    }



    public function delete(Course $courses)
    {
        $courses->delete();
        return response()->json(['message' => 'cours supprimer avec succes'], 201);
    }
}