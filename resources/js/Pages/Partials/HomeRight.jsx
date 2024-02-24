import React, { useEffect, useState } from "react";
import HomeAd from "./HomeAd";
import axios from "axios";
function HomeRight() {
    let [results, setResults] = useState([]);
    useEffect(() => {
        let data = axios.get("/api/recent/1").then((res) => {
            setResults(res.data);
        });
    }, [0]);
    return (
        <div className="w-full p-2">
            <div className="grid w-full p-2">
                <div className="hidden lg:block">
                    <HomeAd />
                </div>
                <div className="mt-2 w-full border border-primary">
                    <div className="bg-gradient-to-tr from-secondary via-primary to-purple-600 p-2">
                        <span className="font-bold text-black">Popular</span>
                    </div>
                    <div className="grid h-fit min-h-screen grid-flow-row p-2">
                        {results.map((anime, index) => {
                            return (
                                <a href={anime.link} className="p-2">
                                    <div>
                                        <h2>{anime.title}</h2>
                                        <span className="text-sm text-slate-400">
                                            {anime.release}
                                        </span>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeRight;
