import React from "react";
import Navbar from "@/Components/Navbar";
import HomeRecent from "./Partials/HomeRecent";
import { Head, usePage } from "@inertiajs/react";
import { Footer } from "@/Components/Footer";
function Home() {
    let { theme } = usePage().props;
    return (
        <div data-theme={theme} className="flex w-full justify-center">
            <Head>
                <title>Wellcome To Anime Website || Watch Free Animes</title>
            </Head>
            <div className="container grid grid-cols-4">
                <div className="col-span-4">
                    <Navbar />
                </div>
                <div className="col-span-4 lg:col-span-3">
                    <HomeRecent type="recent" />
                </div>
                <div className="col-span-1">popular</div>
                <div className="col-span-4">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;
