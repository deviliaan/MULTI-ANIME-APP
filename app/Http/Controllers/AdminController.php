<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    //
    function settings()
    {
        $settings = Setting::all()->get(0);
        $settings = json_decode(json_encode($settings, FALSE));
        return Inertia::render('Settings', ['settings' => $settings]);
    }
}
