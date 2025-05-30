<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $casts = [
        'images' => 'array'
    ];
    protected $fillable = ['name', 'long_title', 'description', 'price', 'images', 'category_id', 'stock'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
