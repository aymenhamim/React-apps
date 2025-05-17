<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ProductController extends Controller
{
    use AuthorizesRequests;

    public function __construct()
    {

        $this->authorizeResource(Product::class, 'product');
    }

    public function index()
    {
        return Product::all();
    }

    public function show(Product $product)
    {
        return $product;
    }

    // public function store(ProductRequest $request)
    // {
    //     $validated = $request->validated();

    //     return Product::create($validated);
    // }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'description' => 'nullable',
            'price' => 'required|numeric',
            'discount' => 'nullable|numeric|min:0|max:100',
            'category_id' => 'nullable|exists:categories,id',
            'image' => 'nullable|string',
        ]);

        return Product::create($validated);
    }

    // public function update(ProductRequest $request, Product $product)
    // {
    //     $validated = $request->validated();

    //     $product->update($validated);
    //     return $product;
    // }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required',
            'description' => 'nullable',
            'price' => 'required|numeric',
            'discount' => 'nullable|numeric|min:0|max:100',
            'category_id' => 'nullable|exists:categories,id',
            'image' => 'nullable|string',
        ]);

        $product->update($validated);
        return $product;
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message' => 'Deleted']);
    }

    public function count()
    {

        return response()->json([
            'count' => Product::count(),
        ]);
    }
}
