<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RecordController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\BmiController;

// Route::resource('records', RecordController::class)->middleware('auth');

// Route::get('/register', [LoginController::class, 'showRegisterForm'])->name('register');
Route::post('/api/register', [LoginController::class, 'register']);

// Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/api/login', [LoginController::class, 'login']);

Route::post('/logout', [LoginController::class, 'logout'])->name('logout');
Route::post('/api/calculate-bmi', [BmiController::class, 'bmi_track']);

// Route::get('/', function () {
//     return view('welcome');
// });
