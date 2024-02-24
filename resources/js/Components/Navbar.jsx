import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaravel } from "@fortawesome/free-brands-svg-icons";
import {
    faBars,
    faHome,
    faLanguage,
    faSearch,
    faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
    let [toggle, setToggle] = useState(false);
    let [ipt, setIpt] = useState("");
    const handleToggle = () => {
        let btn = document.getElementById("btn");
        btn.classList.toggle("rotate-90");
        setToggle(!toggle);
    };
    const handleSubmit = () => {
        window.location.href = `/search/${ipt}`;
    };
    const handleKeydown = (event) => {
        if (event.key === "Enter") {
            handleSubmit();
        }
    };
    return (
        <div className="w-full">
            <div className="flex h-16 items-center p-4 lg:justify-between">
                <div className="cursor-pointer">
                    <a href="/">
                        <h2 className="text-xl font-bold text-primary">
                            69Anime.xyz
                        </h2>
                    </a>
                </div>
                <div className="hidden w-[30%] justify-around lg:flex">
                    <a
                        className="font-bold text-info hover:text-slate-600"
                        href="/"
                    >
                        Home
                    </a>
                    <a
                        className="font-bold text-info hover:text-slate-600"
                        href="/dubbed"
                    >
                        Dubbed
                    </a>
                    <a
                        className="font-bold text-info hover:text-slate-600"
                        href="/movies"
                    >
                        Movies
                    </a>
                </div>
                <div className="hidden lg:block">
                    <label className="input input-bordered mt-2 flex items-center gap-2">
                        <input
                            type="text"
                            className="grow border-none"
                            placeholder="Search"
                            value={ipt}
                            onKeyDown={handleKeydown}
                            onChange={(e) => setIpt(e.target.value)}
                            onSubmit={handleSubmit}
                        />
                        <button onClick={handleSubmit}>
                            <FontAwesomeIcon icon={faSearch} size="sm" />
                        </button>
                    </label>
                </div>
                <div
                    onClick={handleToggle}
                    id="btn"
                    className="ml-auto transition-transform delay-75 duration-200 ease-in-out hover:cursor-pointer lg:hidden"
                >
                    <FontAwesomeIcon icon={faBars} size="2xl" />
                </div>
            </div>
            <div
                className={`${toggle ? "flex flex-col p-2" : "hidden"} transition-all delay-100 duration-200 ease-in-out lg:hidden`}
            >
                <a
                    className="delay-600 rounded-md p-3 transition ease-in hover:bg-secondary hover:text-primary"
                    href="/"
                >
                    <FontAwesomeIcon className="mr-2" icon={faHome} />
                    Home
                </a>
                <a
                    className="delay-600 rounded-md p-3 transition ease-in hover:bg-secondary hover:text-primary"
                    href="/dubbed"
                >
                    <FontAwesomeIcon className="mr-2" icon={faLanguage} />
                    Dubbed
                </a>
                <a
                    className="delay-600 rounded-md p-3 transition ease-in hover:bg-secondary  hover:text-primary"
                    href="/popular"
                >
                    <FontAwesomeIcon className="mr-2" icon={faVideoCamera} />
                    Movies
                </a>
                <label className="input input-bordered mt-2 flex items-center gap-2">
                    <input
                        type="text"
                        value={ipt}
                        onKeyDown={handleKeydown}
                        onSubmit={handleSubmit}
                        onChange={(e) => setIpt(e.target.value)}
                        className="grow border-none"
                        placeholder="Search"
                    />
                    <button onClick={handleSubmit}>
                        <FontAwesomeIcon icon={faSearch} size="sm" />
                    </button>
                </label>
            </div>
        </div>
    );
}

export default Navbar;
