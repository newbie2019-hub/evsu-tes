<?php

use App\Http\Controllers\AdminAuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function () {
    Route::group(['prefix' => 'admin'], function (){
        Route::post('login', [AdminAuthController::class, 'login']);
        Route::post('logout', [AdminAuthController::class, 'logout']);
        Route::post('update', [AdminAuthController::class, 'update']);
        Route::post('change_password', [AdminAuthController::class, 'changePassword']);
        Route::post('me', [AdminAuthController::class, 'me']);
    });
});