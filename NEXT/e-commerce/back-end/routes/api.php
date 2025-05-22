<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



// !Product routes
Route::middleware(['auth:sanctum'])
    ->controller(ProductController::class)
    ->prefix('/products')
    ->group(function () {
        Route::get('/count', 'count');
        // Route::get('/{product}', 'show');
        Route::put('/{product}', 'update');
        Route::post('/', 'store');
        Route::delete('/{product}', 'destroy');
    });

// Route::get('/products/count', [ProductController::class, 'count']);

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{product}', [ProductController::class, 'show']);




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
