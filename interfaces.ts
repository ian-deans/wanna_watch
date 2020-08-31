
export interface IState {
    results: Array<any>;
    savedItems: Array<any>;
    modalOpen: boolean;
    error?: string;
    modalData: IProgram | null;
}

export interface IAction {
    type: string;
    payload?: any;
}

export interface IResult {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export interface IStreamLocation {
    display_name: string;
    icon: string;
    url: string;
    id: string;
}

export interface IProgram {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: String
    }>,
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
    streaming?: Array<IStreamLocation>;
}