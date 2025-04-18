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
            'image' => 'required',
            'titre' => 'required|string',
            'description' => 'required|string',
            'nombre_secsion' => 'required|integer',
            'nombre_heure' => 'required|integer',
            'category_id' => 'required|integer'
        ]);
        $imagePath = $request->file('image')->store('courses', 'public');
        $courses = Course::create([
            'image' => $imagePath,
            'titre' => $request->titre,
            'description' => $request->description,
            'nombre_secsion' => $request->nombre_secsion,
            'nombre_heure' => $request->nombre_heure,
            'category_id' => $request->category_id
        ]);
        return response()->json($courses, 201);
    }

    public function update(request $request, Course $courses)
    {
        $request->validate([
            'image' => 'image',
            'titre' => 'required|string',
            'description' => 'required|string',
            'nombre_secsion' => 'required|integer',
            'nombre_heure' => 'required|integer',
            'category_id' => 'required|integer'
        ]);
        $imagePath = $request->file('image')->store('courses', 'public');
        $courses->update([
            'image' => $imagePath,
            'titre' => $request->titre,
            'description' => $request->description,
            'nombre_secsion' => $request->nombre_secsion,
            'nombre_heure' => $request->nombre_heure,
            'category_id' => $request->category_id
        ]);
        return response()->json($courses, 201);
    }

    public function delete($id)
    {
        try {
            $course = Course::findOrFail($id);
            $course->delete();
            return response()->json(['message' => 'Course deleted successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error deleting course'], 500);
        }
    }
}
