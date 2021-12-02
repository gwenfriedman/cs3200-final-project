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
                <label>First Name</label>
                <input
                    onChange={(e) =>
                        setAlbum(album =>
                            ({...album, firstName: e.target.value}))}
                    value={album.firstName}/>
                <label>Last Name</label>
                <input
                    onChange={(e) =>
                        setAlbum(album =>
                            ({...album, lastName: e.target.value}))}
                    value={album.lastName}/>
                <label>Username</label>
                <input
                    onChange={(e) =>
                        setAlbum(album =>
                            ({...album, username: e.target.value}))}
                    value={album.username}/>
                <label>Password</label>
                <input
                    onChange={(e) =>
                        setAlbum(album =>
                            ({...album, password: e.target.value}))}
                    value={album.password}/>

                <label>Email</label>
                <input
                    onChange={(e) =>
                        setAlbum(album =>
                            ({...album, email: e.target.value}))}
                    value={album.email}/>

                <label>Date of Birth</label>
                <input
                    onChange={(e) =>
                        setAlbum(album =>
                            ({...album, dateOfBirth: e.target.value}))}
                    value={album.dateOfBirth}/>

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