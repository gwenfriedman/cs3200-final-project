// declare URL where server listens for HTTP requests
const SINGERS_URL = "http://localhost:8080/api/singers"

// retrieve all singers from the server
export const findAllSingers = () => {
    return fetch(SINGERS_URL).then(response => response.json())
}

// retrieve a single singer by their ID
export const findSingerById = (id) => {
    return fetch(`${SINGERS_URL}/${id}`).then(response => response.json())
}

// delete a singer by their ID
export const deleteSinger = (id) => {
    return fetch(`${SINGERS_URL}/${id}`, {
        method: "DELETE"
    })
}
// create a new singer
export const createSinger = (singer) =>
    fetch(SINGERS_URL, {
        method: 'POST',
        body: JSON.stringify(singer),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// update a singer by their ID
export const updateSinger = (id, singer) =>
    fetch(`${SINGERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(singer),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// retrieve a the list of albums for a given singer
export const getAlbums = (id) => {
    return fetch(`${SINGERS_URL}/${id}/albums`).then(response => response.json())
}

export default {
    findAllSingers,
    findSingerById,
    deleteSinger,
    createSinger,
    updateSinger,
    getAlbums
}
