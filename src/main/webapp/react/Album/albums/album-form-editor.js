import albumService from "./album-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const AlbumFormEditor = () => {
        const {id} = useParams()
        const [album, setAlbum] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findAlbumById(id)
                }
        }, []);
        const findAlbumById = (id) =>
            albumService.findAlbumById(id).then(album => setAlbum(album))
        const deleteAlbum = (id) =>
            albumService.deleteAlbum(id).then(() => history.back())
        const createAlbum = (album) =>
            albumService.createAlbum(album).then(() => history.back())
        const updateAlbum = (id, newAlbum) =>
            albumService.updateAlbum(id, newAlbum).then(() => history.back())
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
                    onClick={() => createAlbum(album)}>
                        Create
                </button>
                <button
                    onClick={() => updateAlbum(album.id, album)}>
                        Save
                </button>
        </div>
    )
}

export default AlbumFormEditor