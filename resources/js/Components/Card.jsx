import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Card({ anime }) {
    return (
        <a
            href={`${anime.link}`}
            className="relative h-full w-full min-w-[185px] max-w-[185px] lg:max-w-full"
        >
            <figure className="group relative h-60 w-full overflow-hidden md:grid-cols-5 lg:h-80">
                <img
                    src={anime?.image}
                    loading="lazy"
                    className="delay-600 h-full w-full object-cover transition ease-in-out group-hover:scale-110"
                    alt={anime?.title}
                />
                <div className="absolute inset-0 left-0 top-0 grid place-items-center bg-slate-400 opacity-0 transition-opacity delay-75 duration-100 ease-in-out group-hover:opacity-70">
                    <FontAwesomeIcon
                        className="text-primary"
                        icon={faPlayCircle}
                        size="2xl"
                    />
                </div>
            </figure>
            <div className="w-full">
                <h2 className="truncate">{anime?.title}</h2>
                <h2 className="text-md">Episode {anime.episode}</h2>
                <h2 className="text-sm opacity-70">{anime.release}</h2>
            </div>
        </a>
    );
}

export default Card;
