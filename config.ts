
export const utellyConfig = {
    URL: (title: string) => `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${title}&country=us`,
    OPTIONS: {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "16e705e434mshf30a3c6c9b4f454p119485jsn6718719d6d53"
        }
    },
}

export const omdbConfig = {
    URL: (id: string) => `http://www.omdbapi.com/?apikey=11802371&i=${id}`,
    SEARCH_URL: (term: string) => `http://www.omdbapi.com/?apikey=11802371&s=${term}`,
}

export const imdbConfig = {
    URL: (id: string) => `https://www.imdb.com/title/${id}`
}