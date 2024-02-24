import React from "react";
import Navbar from "@/Components/Navbar";
import HomeRecent from "./Partials/HomeRecent";
import { Footer } from "@/Components/Footer";
import { Head, usePage } from "@inertiajs/react";
function Search() {
    let { keyword } = usePage().props;
    return (
        <div data-theme="dim" className="w-full">
            <Head>
                <title>Wellcome To Anime Website || Watch Free Animes</title>
            </Head>
            <div className="w-full">
                <Navbar />
                <div>
                    <HomeRecent type="search" keyword={keyword} />
                </div>
                <div>{/* Home Popular */}</div>
                <Footer />
            </div>
        </div>
    );
}

export default Search;
