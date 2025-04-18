<?php

use App\Http\Controllers\Auth\Login;
use App\Http\Controllers\Auth\Logout;
use App\Http\Controllers\Auth\Register;
use App\Http\Controllers\Admin\Courses;
use App\Http\Controllers\Admin\Categorys;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Auth routes
Route::post('/logout', [Logout::class, 'logout'])->middleware('auth:sanctum');
Route::post('/register', [Register::class, 'ajouter']);
Route::post('/login', [Login::class, 'login']);

// Admin routes
Route::prefix('admin')->group(function () {
    // Simplified course routes
    Route::controller(Courses::class)->prefix('courses')->group(function () {
        Route::get('/', 'index');
        Route::get('/{id}', 'find');
        Route::post('/', 'ajouter');
        Route::put('/{id}', 'update');
        Route::delete('/{id}', 'delete');
    });

    // Simplified category routes
    Route::controller(Categorys::class)->prefix('categories')->group(function () {
        Route::get('/', 'index');
        Route::get('/{id}', 'find');
        Route::get('/{category}/courses', 'show');
        Route::post('/', 'ajouter');
        Route::put('/{category}', 'update');
        Route::delete('/{category}', 'delete');
    });
});