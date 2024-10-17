import { FC, PropsWithChildren } from "react";
import { Metadata } from "next";

import { ITrendingMovie } from "@/typings";

interface IMovieProps {
    params: Record<"movie", string>;
}

export const generateMetadata = async ({ params }: IMovieProps): Promise<Metadata> => {
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

        return {
            title: movie.Title,
            description: movie.Description,
        };
    } catch (e) {
        return { title: "TV Show", description: "Lorem ipsum :(" };
    }
};

const MovieLayout: FC<PropsWithChildren> = ({ children }) => {
    return children;
};

export default MovieLayout;
