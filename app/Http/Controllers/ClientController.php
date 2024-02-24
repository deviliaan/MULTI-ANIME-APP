<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class ClientController extends Controller
{
    //
    public function index()
    {
        return Inertia::render('Home');
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
