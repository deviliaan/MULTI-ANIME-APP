import Card from "@/Components/Card";
import axios from "axios";
import React, { useEffect, useState } from "react";

function HomeRecent({ type, keyword }) {
    const [results, setResults] = useState([]);
    const fakeResults = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3,
        4, 5, 6, 7, 8, 9, 10,
    ];
    const [page, setPage] = useState(1);
    useEffect(() => {
        let data = axios
            .get(`/api/${type}/${keyword ? `${keyword}/${page}` : page}`)
            .then((res) => {
                setResults(res.data);
            });
    }, [page]);

    const next = () => {
        setPage(page + 1);
    };
    const prev = () => {
        if (page == 1) alert("nopage ahead");
        else setPage(page - 1);
    };
    return (
        <div className="grid-rows-auto mb-2 mt-4 grid w-full border border-primary">
            <div className="flex w-full justify-between bg-gradient-to-r from-primary via-purple-300 to-secondary p-2">
                <span className="font-bold capitalize text-secondary">
                    {type}
                </span>
                <div className="flex gap-2">
                    <button
                        onClick={prev}
                        className={
                            page == 1
                                ? "hidden"
                                : "px-2 text-violet-700 hover:bg-slate-600 hover:font-bold hover:text-white"
                        }
                    >
                        {page - 1}
                    </button>
                    <button className="border-b-2 border-info text-primary">
                        {page}
                    </button>
                    <button
                        onClick={next}
                        className="px-2 text-violet-800 hover:bg-slate-600 hover:font-bold hover:text-white"
                    >
                        {page + 1}
                    </button>
                </div>
            </div>
            <div className="mt-2 grid w-full grid-cols-2 place-items-center gap-2 p-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
                {results.length > 0 ? (
                    results.map((anime, index) => {
                        return (
                            <Card
                                anime={anime}
                                key={(Math.random() + 1)
                                    .toString(36)
                                    .substring(7)}
                            />
                        );
                    })
                ) : results.status ? (
                    <div className="h-[100vh]">No results found</div>
                ) : (
                    <div>
                        <div className="col-span-3 grid h-full w-full grid-cols-3 gap-2">
                            {fakeResults.map((num, index) => {
                                return (
                                    <a className="h-60 w-full animate-pulse bg-slate-500"></a>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomeRecent;
