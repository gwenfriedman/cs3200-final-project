import albumService from "./album-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const AlbumFormEditor = () => {
        const {id} = useParams()
        const [album, setAlbum] = useState({})
        const [singer, setSinger] = useState({})
        const [songs, setSongs] = useState([])
        useEffect(() => {
                if(id !== "new") {
                        findAlbumById(id)
                        findSinger(id)
                        findSongs(id)
                }
        }, []);
        const findAlbumById = (id) =>
            albumService.findAlbumById(id).then(album => setAlbum(album))
        const deleteAlbum = (id) =>
            albumService.deleteAlbum(id).then(() => history.back())
        const createAlbum = (album) =>
            albumService.createAlbum(album).then(() => history.back())
        const updateAlbum = (id, newAlbum, newSinger) =>
            albumService.updateAlbum(id, newAlbum).then(() => history.back())
        const findSinger = (id) =>
            albumService.findSinger(id).then(singer => setSinger(singer))
        const findSongs = (id) =>
            albumService.findSongs(id).then(songs => setSongs(songs))
        const findSingerById = (id) =>
            albumService.findSingerById(id).then(singer => setSinger(singer))
        return (
        <div>
                <h2>Album Editor</h2>
                <label>ID</label>
                <input value={album.id}/><br/>
                <label>Title</label>
                <input
                    onChange={(e) =>
                        setAlbum(album =>
                            ({...album, title: e.target.value}))}
                    value={album.title}/>
                <label>Release Date</label>
                <input
                    onChange={(e) =>
                        setAlbum(album =>
                            ({...album, releaseDate: e.target.value}))}
                    value={album.releaseDate}/>
                <label>Genre</label>
                <input
                    onChange={(e) =>
                        setAlbum(album =>
                            ({...album, genre: e.target.value}))}
                    value={album.genre}/>

                <label>Singer</label>
                <input
                    onChange={(e) =>
                        setAlbum(album =>
                            ({...album, singer: findSingerById(e.target.value)}))}
                    value={album.singer ? album.singer.id : 0}/>

                <button
                    onClick={() => {
                            history.back()}}>
                        Cancel
                </button>
                <button
                    onClick={() => deleteAlbum(album.id)}>
                        Delete
                </button>
                <button
                    onClick={() => createAlbum({...album, singer: singer})}>
                        Create
                </button>
                <button
                    onClick={() => updateAlbum(album.id, {...album, singer: singer})}>
                        Save
                </button>

                <br />
                <h3>Songs</h3>
                <ul className="list-group">
                    {
                        songs.map(song =>
                            <li className="list-group-item"
                                key={song.id}>
                               <a href={`/cs3200-final-project/db-design-orm-assignment-master/src/main/webapp/react/Song/index.html?#/songs/${song.id}`}>
                                    {song.title}
                                </a>
                            </li>)
                    }
                </ul>

                <br />
                <h3>Singer</h3>
                <a href={`/cs3200-final-project/db-design-orm-assignment-master/src/main/webapp/react/Singer/index.html?#/singers/${singer.id}`}>
                    {singer.firstName} {singer.lastName}
                </a>
        </div>
    )
}

export default AlbumFormEditor