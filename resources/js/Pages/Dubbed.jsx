import React from "react";
import Navbar from "@/Components/Navbar";
import { Footer } from "@/Components/Footer";
import { Head } from "@inertiajs/react";
import HomeRecent from "./Partials/HomeRecent";
function Dubbed() {
    return (
        <div data-theme="dim" className="w-full">
            <Head>
                <title>Wellcome To Anime Website || Watch Free Animes</title>
            </Head>
            <div className="w-full">
                <Navbar />
                <div>
                    <HomeRecent type="dubbed" />
                </div>
                <div>{/* Home Popular */}</div>
                <Footer />
            </div>
        </div>
    );
}

export default Dubbed;
