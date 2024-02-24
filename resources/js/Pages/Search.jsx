import React from "react";
import Navbar from "@/Components/Navbar";
import HomeRecent from "./Partials/HomeRecent";
import { Footer } from "@/Components/Footer";
import { Head, usePage } from "@inertiajs/react";
import HomeRight from "./Partials/HomeRight";
function Search() {
    let { keyword } = usePage().props;
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
                    <HomeRecent type="search" keyword={keyword} />
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

export default Search;
