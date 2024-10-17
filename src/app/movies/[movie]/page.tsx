import { NextPage } from "next";
import { ITrendingMovie } from "@/typings";
import { notFound } from "next/navigation";
import Image from "next/image";

interface IMovieProps {
    params: Record<"movie", string>;
}

const Movie: NextPage<IMovieProps> = async ({ params }) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/data.json`);
        if (!response.ok) {
            throw new Error("Error fetching movie");
        }

        const data = await response.json();
        const movie = ((data?.TrendingNow ?? []) as ITrendingMovie[]).find((movie) => movie.Id === params.movie);

        if (!movie) {
            throw new Error("Movie is not found");
        }

        return (
            <>
                <video
                    src={movie.VideoUrl}
                    controls={false}
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 z-[-1] h-full w-full object-cover"
                    aria-label={`${movie.Title} trailer`}
                />
                <div className="flex flex-1 flex-col justify-center gap-4 bg-black/75 p-4">
                    <p className="-mb-2 text-2xl font-semibold uppercase tracking-widest text-gray-500">Movie</p>
                    <Image
                        src={`/movies/${movie.TitleImage}`}
                        width={683}
                        height={82}
                        alt={movie.Title}
                        className="rounded-lg"
                    />
                    <div className="flex gap-4 text-xl font-medium leading-7 text-white">
                        <span>{movie.ReleaseYear}</span>
                        <span>{movie.MpaRating}</span>
                        <span>{movie.Duration}</span>
                    </div>
                    <p className="text-xl font-medium leading-7 text-white">{movie.Description}</p>
                </div>
            </>
        );
    } catch {
        return notFound();
    }
};

export default Movie;
