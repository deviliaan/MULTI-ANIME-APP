import React, { useEffect, useState } from "react";
import HomeAd from "./HomeAd";
import axios from "axios";
function HomeRight() {
    let [results, setResults] = useState([]);
    let [newSeasons, setNewSeason] = useState([]);
    useEffect(() => {
        let data = axios.get("/api/popular/1").then((res) => {
            setResults(res.data);
        });
        let newSeaon = axios.get("/api/new-season/1").then((res) => {
            setNewSeason(res.data);
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
                    <div className="grid h-screen min-h-screen grid-flow-row overflow-y-scroll p-2">
                        {results.map((anime, index) => {
                            if (index >= 10) {
                                return null;
                            } else {
                                return (
                                    <a href={anime.link} className="group p-2">
                                        <img
                                            src={anime.image}
                                            className="h-14 w-full rounded-md object-cover object-center transition-all delay-75 duration-300 ease-in-out group-hover:h-24 group-hover:lg:h-20"
                                            alt=""
                                            srcset=""
                                        />
                                        <div>
                                            <h2>{anime.title}</h2>
                                            <span className="text-sm text-slate-400">
                                                {anime.release}
                                            </span>
                                        </div>
                                    </a>
                                );
                            }
                        })}
                    </div>
                </div>
                {/* anime popular section */}
                <div className="mt-2 w-full border border-primary">
                    <div className="bg-gradient-to-tr from-secondary via-primary to-purple-600 p-2">
                        <span className="font-bold text-black">
                            New Seasons
                        </span>
                    </div>
                    <div className="grid h-screen grid-flow-row overflow-y-scroll p-2">
                        {newSeasons.map((anime, index) => {
                            if (index >= 10) {
                                return null;
                            } else {
                                return (
                                    <a href={anime.link} className="group p-2">
                                        <img
                                            src={anime.image}
                                            className="h-14 w-full rounded-md object-cover object-center transition-all delay-75 duration-300 ease-in-out group-hover:h-24 group-hover:lg:h-20"
                                            alt=""
                                            srcset=""
                                        />
                                        <div>
                                            <h2>{anime.title}</h2>
                                            <span className="text-sm text-slate-400">
                                                {anime.release}
                                            </span>
                                        </div>
                                    </a>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className="mt-2 grid h-[23.5rem] w-full place-items-center bg-slate-500">
                    <span>Ad</span>
                </div>
            </div>
        </div>
    );
}

export default HomeRight;
