<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');




Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


// !Product routes
Route::get('/products/count', [ProductController::class, 'count']);

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{product}', [ProductController::class, 'show']);
Route::delete('/products/{product}', [ProductController::class, 'destroy']);
Route::put('/products/{product}', [ProductController::class, 'update']);
Route::post('/products', [ProductController::class, 'store']);

Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    // fixme Route::delete('/products/{product}', [ProductController::class, 'destroy']);

});

// Route::get('/test-admin', function () {
//     return ['message' => 'You are an admin!'];
// })->middleware(['auth:sanctum', 'admin']);

// Route::middleware('auth:sanctum')->group(function () {
// // Protected (admin required later)
// });

// Route::get('/auth-debug', function (Request $request) {
//     $sanctumUser = auth('sanctum')->user();
//     return [
//         'has_user' => $request->user() ? true : false,
//         'sanctum_check' => auth('sanctum')->check(),
//         'sanctum_user_id' => $sanctumUser ? $sanctumUser->id : null,
//         'sanctum_user_email' => $sanctumUser ? $sanctumUser->email : null,
//         'default_guard' => config('auth.defaults.guard'),
//         'request_headers' => $request->headers->all(),
//     ];
// });
