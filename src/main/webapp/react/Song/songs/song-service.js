// declare URL where server listens for HTTP requests
const SONGS_URL = "http://localhost:8080/api/songs"

// retrieve all songs from the server
export const findAllSongs = () => {
    return fetch(SONGS_URL).then(response => response.json())
}

// retrieve a single song by its ID
export const findSongById = (id) => {
    return fetch(`${SONGS_URL}/${id}`).then(response => response.json())
}

// delete a song by their ID
export const deleteSong = (id) => {
    return fetch(`${SONGS_URL}/${id}`, {
        method: "DELETE"
    })
}
// create a new singer
export const createSong = (song) =>
    fetch(SONGS_URL, {
        method: 'POST',
        body: JSON.stringify(song),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// update a song by its ID
export const updateSong = (id, song) =>
    fetch(`${SONGS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(song),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export default {
    findAllSongs,
    findSongById,
    deleteSong,
    createSong,
    updateSong
}
