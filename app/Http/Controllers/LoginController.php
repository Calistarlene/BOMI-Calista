<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Session;
use App\Models\User;


class LoginController extends Controller
{
    //This is the login controller
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            $user = User::where('email', $request->email)->first();
            return response()->json(['user' => $user, 'message' => 'Login successful'], 200);
        } else {
            return response()->json(['user' => null, 'message' => 'Invalid credentials'], 401);
        }
    }

    public function logout(Request $request)
    {
        Auth::logout();
        // $request->session()->invalidate();
        // $request->session()->regenerateToken();
        Session::flush();
        return response()->json(['message' => 'Logout successful'], 200);
    }

    public function register(Request $request)
    {
        $data = $request->all();
        // $request->validate([
        //     'name' => 'required',
        //     'email' => 'required|email|unique:users',
        //     'password' => 'required|min:6|confirmed',
        //     'password_confirmation' => 'required|min:6|same:password',
        // ]);

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ]);

        if ($user) {
            return response()->json([
                'message' => 'Register successful'
            ], 200);
        } else {
            return response()->json([
                'message' => 'Register failed'
            ], 500);
        }
    }
}
