import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import HomeRecent from "./Partials/HomeRecent";
import HomeRight from "./Partials/HomeRight";
import { Footer } from "@/Components/Footer";
function Movies() {
    return (
        <div className="flex w-full justify-center">
            <Head>
                <title>Wellcome To Anime Website || Watch Free Animes</title>
            </Head>
            <div className="grid-rows-auto container grid grid-cols-4">
                <div className="col-span-4">
                    <Navbar />
                </div>
                <div className="col-span-4 lg:col-span-3">
                    <HomeRecent type="movies" />
                </div>
                <div className="col-span-4 w-full lg:col-span-1">
                    <HomeRight />
                </div>
                <div className="col-span-4">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Movies;
