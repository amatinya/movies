import { NextPage } from "next";
import Image from "next/image";

import { TrendingNow } from "./ui";

const Home: NextPage = async () => {
    return (
        <>
            <Image
                src={`/movies/FeaturedCoverImage.png`}
                alt={"Featured"}
                className="z-[-1] min-h-screen object-cover"
                fill
            />
            <div className="flex flex-1 flex-col justify-center gap-4 p-4">
                <p className={"-mb-2 text-2xl font-semibold uppercase tracking-widest text-gray-500"}>movie</p>
                <Image src={"/movies/FeaturedTitleImage.png"} width={683} height={82} alt={"The Irishman"} />
                <div className={"flex gap-4 text-xl font-medium leading-7 text-white"}>
                    <span>2024</span>
                    <span>18+</span>
                    <span>1h 48m</span>
                </div>
                <p className="text-xl font-medium leading-7 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt expedita magnam <br /> molestias,
                    ratione sunt tempora? Beatae, culpa deleniti fugit in, ipsum nam necessitatibus <br /> nesciunt odio
                    odit omnis quasi rerum tempora.
                </p>
                <div className={"flex gap-4"}>
                    <button className={"h-14 rounded-full bg-white px-12 hover:opacity-90"}>
                        <span className={"text-xl font-bold text-black"}>Play</span>
                    </button>
                    <button
                        className={
                            "h-14 rounded-full bg-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-12 hover:opacity-90"
                        }
                    >
                        <span className={"text-xl font-bold text-white"}>More info</span>
                    </button>
                </div>
            </div>
            <TrendingNow />
        </>
    );
};

export default Home;
