<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class ClientController extends Controller
{
    public $settings;
    //
    public function index()
    {
        $this->settings = json_decode(json_encode(Setting::all()->get(0), FALSE));
        $theme = env('APP_THEME');
        return Inertia::render('Home', ['settings' => $this->settings]);
    }
    public function content($id)
    {
        $req = Request::create("/api/videos/$id", 'GET');
        $res = Route::dispatch($req);
        $anime = $res->getContent();
        return Inertia::render('SingleContent', ['id' => $id, 'anime' => $anime]);
    }
    public function dubbed()
    {
        return Inertia::render('Dubbed');
    }
    public function search($keyword)
    {
        return Inertia::render('Search', ['keyword' => $keyword]);
    }
}
