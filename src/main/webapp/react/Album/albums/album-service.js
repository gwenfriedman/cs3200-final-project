// declare URL where server listens for HTTP requests
const ALBUMS_URL = "http://localhost:8080/api/albums"

// retrieve all albums from the server
export const findAllAlbums = () => {
    return fetch(ALBUMS_URL).then(response => response.json())
}

// retrieve a album singer by its ID
export const findAlbumById = (id) => {
    return fetch(`${ALBUMS_URL}/${id}`).then(response => response.json())
}

// delete a album by their ID
export const deleteAlbum = (id) => {
    return fetch(`${ALBUMS_URL}/${id}`, {
        method: "DELETE"
    })
}
// create a new album
export const createAlbum = (album) =>
    fetch(ALBUMS_URL, {
        method: 'POST',
        body: JSON.stringify(album),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

// update an album by its ID
export const updateAlbum = (id, album) =>
    fetch(`${ALBUMS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(album),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


export default {
    findAllAlbums,
    findAlbumById,
    deleteAlbum,
    createAlbum,
    updateAlbum
}
