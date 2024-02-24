import React from "react";
import Navbar from "@/Components/Navbar";
import HomeRecent from "./Partials/HomeRecent";
import { Head } from "@inertiajs/react";
import { Footer } from "@/Components/Footer";
function Home() {
    return (
        <div data-theme="dim" className="w-full">
            <Head>
                <title>Wellcome To Anime Website || Watch Free Animes</title>
            </Head>
            <div className="w-full">
                <Navbar />
                <div>
                    <HomeRecent type="recent" />
                </div>
                <div>{/* Home Popular */}</div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
