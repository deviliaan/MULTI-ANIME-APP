<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->boolean('maintenance')->default(false);
            $table->string('theme')->default('dim');
            $table->string('api_provider')->default('gogo');
            $table->json('video_providers')->default(json_encode(['gogoanime', 'zoro']));
            $table->string('website_name')->default('69Anime.xyz');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
