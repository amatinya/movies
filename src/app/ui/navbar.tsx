"use client";
import { FC, useReducer, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface INavLinkProps {
    icon: string;
    href: string;
    isExpanded: boolean;
}

const Navbar: FC = () => {
    const [isMouseOverNavbar, toggleIsMouseOverNavbar] = useReducer(
        (toggleIsMouseOverNavbar) => !toggleIsMouseOverNavbar,
        false
    );

    return (
        <nav
            className={clsx(
                "absolute bottom-0 left-0 top-0 z-10 flex min-h-screen flex-col justify-center bg-gradient-to-r from-black to-transparent transition-all duration-100",
                { "w-16": !isMouseOverNavbar, "w-full": isMouseOverNavbar }
            )}
            onMouseEnter={toggleIsMouseOverNavbar}
        >
            <div
                className={clsx("flex h-full w-max flex-col justify-center gap-4 bg-black/75 px-6")}
                onMouseLeave={toggleIsMouseOverNavbar}
            >
                <NavLink icon="search.png" href="/search" isExpanded={isMouseOverNavbar}>
                    Search
                </NavLink>
                <NavLink icon="home.png" href="/" isExpanded={isMouseOverNavbar}>
                    Home
                </NavLink>
                <NavLink icon="tv-shows.png" href="/tv-shows" isExpanded={isMouseOverNavbar}>
                    TV Shows
                </NavLink>
                <NavLink icon="movies.png" href="/movies" isExpanded={isMouseOverNavbar}>
                    Movies
                </NavLink>
                <NavLink icon="genres.png" href="/genres" isExpanded={isMouseOverNavbar}>
                    Genres
                </NavLink>
                <NavLink icon="watch-later.png" href="/watch-later" isExpanded={isMouseOverNavbar}>
                    Watch later
                </NavLink>
            </div>
        </nav>
    );
};

const NavLink: FC<PropsWithChildren<INavLinkProps>> = ({ icon, href, isExpanded, children }) => {
    return (
        <Link
            href={href}
            className={clsx(
                "flex w-full items-center gap-4 rounded-full p-5 text-white hover:bg-white hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500",
                { "aspect-square": !isExpanded }
            )}
        >
            <Image src={`/icons/${icon}`} alt={icon} width={24} height={24} />
            {isExpanded ? <span className={"font-semibold tracking-wide"}>{children}</span> : null}
        </Link>
    );
};

export default Navbar;
