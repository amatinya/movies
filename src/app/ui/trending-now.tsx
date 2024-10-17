"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";

import { ITrendingMovie } from "@/typings";

import "keen-slider/keen-slider.min.css";

const TrendingNow: FC = () => {
    const [movies, setMovies] = useState<ITrendingMovie[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const [skeletonsSliderRef] = useKeenSlider({ slides: { perView: 8 }, mode: "free-snap" });
    const [sliderRef] = useKeenSlider({ slides: { perView: 8 }, mode: "free-snap" });

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/data.json`);
                if (!response.ok) {
                    throw new Error("Error fetching movies");
                }
                const data = await response.json();
                setMovies((data?.TrendingNow as ITrendingMovie[]) ?? []);
            } catch {
                console.error("Error fetching trending movies");
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return (
        <section className={"max-w-screen w-full overflow-hidden px-4 pb-4"}>
            <h2 className={"mb-4 text-2xl tracking-wide text-white"}>Trending now</h2>
            {isLoading ? (
                <div ref={skeletonsSliderRef} className={"keen-slider"}>
                    {[...new Array(8)].map((_, idx) => (
                        <div key={idx} className="keen-slider__slide">
                            <div className={"h-[296px] w-[200px] animate-pulse bg-gray-800"} />
                        </div>
                    ))}
                </div>
            ) : (
                <div ref={sliderRef} className={"keen-slider"}>
                    {movies.map((movie) => (
                        <div key={movie.Id} className="keen-slider__slide">
                            <Link href={`/movies/${movie.Id}`}>
                                <Image src={`/movies/${movie.CoverImage}`} alt={movie.Title} width={200} height={296} />
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default TrendingNow;
