<?php

use App\Http\Controllers\ScraperController;
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

Route::get('/recent/{page}', [ScraperController::class, 'index']);
Route::get('/videos/{id}', [ScraperController::class, 'content']);
Route::get('/dubbed/{page}', [ScraperController::class, 'dubbed']);
Route::get('/search/{keyword}/{page}', [ScraperController::class, 'search']);
