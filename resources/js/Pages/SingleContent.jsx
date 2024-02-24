import { Footer } from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";

function SingleContent() {
    let { id } = usePage().props;
    let anime = JSON.parse(usePage().props.anime);
    return (
        <div className="flex w-full justify-center">
            <Head>
                <title>{`Watch ${anime?.title} Free Online`}</title>
            </Head>
            <div className=" grid-rows-auto container grid grid-cols-4">
                <div className="col-span-4">
                    <Navbar />
                </div>
                <div className="col-span-4 p-2">
                    <div className="p-2 text-lg font-bold text-primary">
                        {anime?.title}
                    </div>
                    <div className="flex w-full justify-center">
                        <div className="h-auto min-h-[260px] w-[90%] overflow-hidden rounded-md border border-primary shadow-lg lg:w-[60%]">
                            <iframe
                                className="m-0 aspect-video h-full w-full border-none p-0"
                                src={anime?.src}
                                scrolling="no"
                                allowFullScreen
                                frameborder="0"
                            ></iframe>
                        </div>
                    </div>
                    <div>
                        <div className="w-full p-2">
                            <span className=" font-bold text-primary">
                                Episodes
                            </span>
                        </div>
                        <div className="grid w-full grid-cols-3 gap-2 p-4 md:grid-cols-4 lg:grid-cols-6">
                            {anime.episodes ? (
                                anime.episodes.map((episode, index) => {
                                    return (
                                        <a href={episode.link}>
                                            <div className="group bg-primary px-2 py-2 shadow-md transition-colors delay-75 duration-200 ease-in-out hover:bg-slate-400">
                                                <span className="text-secondary transition-colors delay-75 duration-200 ease-in-out group-hover:text-primary">
                                                    Episode{" "}
                                                    {anime.episodes.length -
                                                        index}
                                                </span>
                                            </div>
                                        </a>
                                    );
                                })
                            ) : (
                                <div>doesnot exist</div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-span-4">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default SingleContent;
