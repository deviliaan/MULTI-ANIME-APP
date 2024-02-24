<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\BrowserKit\HttpBrowser;

class ScraperController extends Controller
{
    //
    public function index($page)
    {
        $api_end = env('API_END');
        $client = new HttpBrowser();
        $crawler = $client->request('GET', "$api_end?page=$page");
        $listing = $crawler->filter('.listing > li')->each(function ($node) {
            $title = $node->children('a > .name')->text();
            $image = $node->children('a > .img > .picture > img')->attr('src');
            $release = $node->children('a > .meta > .date')->text();
            $link = $node->children('a')->attr('href');
            $anime = [
                'title' => explode(' Episode ', $title)[0],
                'image' => $image,
                'release' => $release,
                'link' => $link,
                'episode' => intval(explode(" Episode ", $title)[1])
            ];
            return $anime;
        });
        return response()->json($listing);
    }
    public function content($id)
    {
        $api_end = env('API_END');
        $client = new HttpBrowser();
        $crawler = $client->request('GET', "$api_end/videos/$id");
        $title = $crawler->filter('.main-content > .video-info > .video-info-left > h1')->text();
        $src = $crawler->filter('.main-content > .video-info > .video-info-left > .watch_play > .play-video > iframe')->attr('src');
        $episodes = $crawler->filter('.main-content > .video-info > .video-info-left > .listing > li')->each(function ($node) {
            $link = $node->children('a')->attr('href');
            $image = $node->children('a > .img > .picture > img')->attr('src');
            $backup = $node->children('a > .img > .picture > img')->attr('onerror');
            $backup = explode("'", $backup)[1];
            $type = $node->children('a > .img > .type > span')->text();
            $episode = [
                'link' => $link,
                'image' => $image,
                'backup' => $backup,
                'type' => $type,
            ];
            return $episode;
        });
        $anime = [
            'title' => $title,
            'src' => $src,
            'episodes' => $episodes,
            'episodes_available' => count($episodes)
        ];
        return response()->json($anime);
    }
    public function dubbed($page)
    {
        $api_end = env('API_END');
        $client = new HttpBrowser();
        $crawler = $client->request("GET", "$api_end/recently-added-dub?page=$page");
        $dubs = $crawler->filter('.listing > li')->each(function ($node) {
            $title = $node->children('a > .name')->text();
            $release = $node->children('a > .meta > .date')->text();
            $link = $node->children('a')->attr('href');
            $image = $node->children('a > .img > .picture > img')->attr('src');
            $anime = [
                'title' => explode(' Episode ', $title)[0],
                'image' => $image,
                'release' => $release,
                'link' => $link,
                'episode' => intval(explode(" Episode ", $title)[1])
            ];
            return $anime;
        });
        return response()->json($dubs);
    }
    public function search($keyword, $page)
    {
        $api_end = env('API_END');
        $client = new HttpBrowser();
        $crawler = $client->request("GET", "$api_end/search.html?keyword=$keyword&page=$page");
        $results = $crawler->filter('.listing > li')->each(function ($node) {
            $title = $node->children('a > .name')->text();
            $image = $node->children('a > .img > .picture > img')->attr('src');
            $release = $node->children('a > .meta > .date')->text();
            $link = $node->children('a')->attr('href');
            $anime = [
                'title' => explode(' Episode ', $title)[0],
                'image' => $image,
                'release' => $release,
                'link' => $link,
                'episode' => intval(explode(" Episode ", $title)[1])
            ];
            return $anime;
        });
        if (count($results) < 1) {
            return response()->json(['status' => 'notfound']);
        } else {
            return response()->json($results);
        }
    }
}
