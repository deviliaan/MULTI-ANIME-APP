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
        <div>
            <Head>
                <title>{`Watch ${anime?.title} Free Online`}</title>
            </Head>
            <div>
                <Navbar />
            </div>
            <div className="p-2">
                <div className="p-2 text-lg font-bold text-primary">
                    {anime?.title}
                </div>
                <div className="flex w-full justify-center">
                    <div className="h-auto min-h-[260px] w-[90%] overflow-hidden rounded-md shadow-lg lg:w-[60%]">
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
                                        <figure className="group relative w-full overflow-hidden rounded-md">
                                            <img
                                                className="rounded-md transition-transform delay-100 duration-300 ease-in-out group-hover:scale-105"
                                                src={episode.backup}
                                                alt={episode.backup}
                                                srcset=""
                                            />
                                            <div className="absolute inset-0 left-0 top-0 z-50 p-2">
                                                <span className="rounded-3xl bg-primary px-3 py-2 text-sm font-bold text-secondary group-hover:animate-pulse">
                                                    {anime.episodes.length -
                                                        index}
                                                </span>
                                            </div>
                                            <div className="duration-250 absolute inset-0 left-0 top-0 grid place-items-center bg-slate-400 opacity-0 transition-opacity delay-75 ease-in-out group-hover:opacity-65">
                                                <FontAwesomeIcon
                                                    icon={faPlayCircle}
                                                    size="2xl"
                                                    className="text-primary"
                                                />
                                            </div>
                                        </figure>
                                        <div className="truncate">
                                            <span>
                                                Episode{" "}
                                                {anime.episodes.length - index}
                                            </span>
                                            <span> {episode.type}</span>
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
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default SingleContent;
