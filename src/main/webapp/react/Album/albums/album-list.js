const {Link, useHistory} = window.ReactRouterDOM;

import albumService from "./album-service"
const { useState, useEffect } = React;

const AlbumList = () => {
    const [albums, setAlbums] = useState([])
    useEffect(() => {
        findAllAlbums()
    }, [])
    const findAllAlbums = () =>
        albumService.findAllAlbums()
            .then(albums => setAlbums(albums))
    const history = useHistory()
    return(
        <div>
            <h2>Albums</h2>
            <button className="btn btn-primary" onClick={() => history.push("/albums/new")}>
                Add album
            </button>
            <ul className="list-group">
                {
                    albums.map(album =>
                        <li className="list-group-item"
                            key={album.id}>
                            <Link to={`/albums/${album.id}`}>
                                {album.title}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default AlbumList;