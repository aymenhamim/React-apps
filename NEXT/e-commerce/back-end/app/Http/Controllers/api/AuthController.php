<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Termwind\Components\Raw;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),
            'is_admin' => false,
        ]);
        $token = $user->createToken('auth_token')->plainTextToken;

        Auth::login($user);
        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user,
        ]);

        // return response()->json($user);
    }

    public function login(Request $request)
    {
        // $credentials = $request->only('email', 'password');
        // if (!Auth::attempt($credentials)) {
        //     return response()->json(['message' => 'Invalid credentials'], 401);
        // }

        if (!Auth::attempt($request->only('email', 'password'))) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        $user = $request->user();

        // ? Clear existing tokens and create a new one
        $user->tokens()->delete();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
            'user' => $user,
        ]);
        // return response()->json(Auth::user());
    }

    public function logout(Request $request)
    {
        // ! Get the current token ID
        $tokenId = $request->user()->currentAccessToken()->id;

        // ! Delete the token by ID
        $request->user()->tokens()->where('id', $tokenId)->delete();

        return response()->json([
            'message' => 'Logged out successfully',
        ]);
    }

    public function user(Request $request) // ! Get the authenticated user
    {
        return response()->json($request->user());
    }
}
