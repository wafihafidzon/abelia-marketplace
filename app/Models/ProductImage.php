<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $fillable = ['image_path'];
    public function product()
    {
        $this->belongsTo(Product::class);
    }
}
