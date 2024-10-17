export interface IMovie {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;

    Description: string;
}

export interface ITrendingMovie extends IMovie {
    VideoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4";
}
