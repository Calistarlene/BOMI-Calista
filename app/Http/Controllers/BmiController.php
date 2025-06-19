<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;

class BmiController extends Controller
{

    public function bmi_track(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required|numeric|min:0',
            'gender' => 'required|string|in:male,female',
            'weight' => 'required|numeric|min:0',
            'height' => 'required|numeric|min:0',
            'age' => 'required|integer|min:0',
            'bmi' => 'required|numeric|min:0'
        ]);

        $new_data = new Record();
        $new_data->user_id = $validated['id'];
        $new_data->gender = $validated['gender'];
        $new_data->age = $validated['age'];
        $new_data->weight = $validated['weight'];
        $new_data->height = $validated['height'];
        $new_data->bmi = $validated['bmi'];
        $new_data->save();

        return response()->json(['message' => 'Successfully Tracked.'], 200);

    }
    
}
