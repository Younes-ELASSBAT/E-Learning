<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class Categorys extends Controller
{
    public function index()
    {
        return Category::all();
    }

    public function find($id)
    {
        $category = Category::find($id);
        return response()->json($category, 201);
    }

    public function show(Category $category)
    {
        $courses = $category->courses()->get();
        return response()->json([$category, $courses], 201);
    }

    public function ajouter(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $category = Category::Create([
            'name' => $request->name,
        ]);
        return response()->json($category, 201);
    }


    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $category->update([
            'name' => $request->name,
        ]);
        return response()->json($category);
    }





    public function delete(Category $category)
    {
        try {
            // Récupérer tous les cours associés à cette catégorie
            $courses = $category->courses()->get();

            // Supprimer manuellement tous les cours associés
            foreach ($courses as $course) {
                $course->delete();
            }

            // Supprimer la catégorie
            $category->delete();

            return response()->json([
                'message' => 'Category and all associated courses deleted successfully',
                'deleted_courses_count' => count($courses)
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error deleting category: ' . $e->getMessage()
            ], 500);
        }
    }
}