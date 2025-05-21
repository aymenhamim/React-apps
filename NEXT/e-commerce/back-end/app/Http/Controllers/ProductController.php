<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{

    public function __construct() {}

    public function index(Request $request)
    {
        $pagination = $request->query('pagination');
        return Product::paginate($pagination > 0 ? $pagination : 5);
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
            'quantity' => 'nullable|integer',
            // 'discount' => 'nullable|numeric|min:0|max:100',
            'category_id' => 'nullable|exists:categories,id',
            'images' => 'array',
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
            'quantity' => 'nullable|integer',
            // 'discount' => 'nullable|numeric|min:0|max:100',
            'category_id' => 'nullable|exists:categories,id',
            'images' => 'array',
        ]);

        $product->update($validated);
        return $product;
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['message' => Auth::user()]);
    }

    public function count()
    {

        return response()->json([
            'count' => Product::count(),
        ]);
    }
}
