import {
    faFacebook,
    faLaravel,
    faTwitter,
    faYoutube,
    faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Footer = () => {
    return (
        <div>
            <footer className="footer rounded-t-xl bg-neutral p-10 text-neutral-content">
                <aside>
                    <FontAwesomeIcon
                        icon={faLaravel}
                        size="2xl"
                        className="h-8 w-8"
                    />
                    <p>
                        69Anime.xyz
                        <br />
                        Providing reliable ANIME FREE
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a className="cursor-pointer">
                            <FontAwesomeIcon icon={faTwitter} size="2xl" />
                        </a>
                        <a className="cursor-pointer">
                            <FontAwesomeIcon icon={faYoutube} size="2xl" />
                        </a>
                        <a className="cursor-pointer">
                            <FontAwesomeIcon icon={faFacebook} size="2xl" />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};
