<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function getProducts()
    {
        return Inertia::render('shop/page', [
            'products' => Product::all()
        ]);
    }
}
