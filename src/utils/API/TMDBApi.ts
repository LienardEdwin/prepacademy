const API_TOKEN = 'bc4c32223b952aeeda0169bf10a30277'

export function getFilmsFromApiWithSearchedText (text: string) {
    const url = 'https://api.themoviedb.org/3/search/multi?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getFilmsByPopularity(genre: string){
    const url = `https://api.themoviedb.org/3/${genre}/popular?api_key=` + API_TOKEN
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getFilmById(id: string, genre: string){
    const url = `https://api.themoviedb.org/3/${genre}/` + id + '?api_key=' + API_TOKEN
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}