<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/', fn() => Inertia::render('home/page'));
Route::get('/about', fn() => Inertia::render('about/page'));
Route::get('/product', fn() => Inertia::render('product/page'));

Route::get('/product-list', [\App\Http\Controllers\ProductController::class, 'getProducts']);
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
