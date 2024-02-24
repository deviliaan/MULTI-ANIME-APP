import React from "react";
import Navbar from "@/Components/Navbar";
import HomeRecent from "./Partials/HomeRecent";
import { Head, usePage } from "@inertiajs/react";
import { Footer } from "@/Components/Footer";
function Home() {
    let { theme } = usePage().props;
    return (
        <div data-theme={theme} className="w-full">
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
