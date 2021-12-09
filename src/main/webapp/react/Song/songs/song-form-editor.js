import songService from "./song-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const SongFormEditor = () => {
        const {id} = useParams()
        const [song, setSong] = useState({})
        const [album, setAlbum] = useState([])
        useEffect(() => {
                if(id !== "new") {
                        findSongById(id)
                        findAlbum(id)
                }
        }, []);
        const findSongById = (id) =>
            songService.findSongById(id).then(song => setSong(song))
        const deleteSong = (id) =>
            songService.deleteSong(id).then(() => history.back())
        const createSong = (song) =>
            songService.createSong(song).then(() => history.back())
        const updateSong = (id, newSong) =>
            songService.updateSong(id, newSong).then(() => history.back())
        const findAlbum = (id) =>
             songService.findAlbum(id).then(album => setAlbum(album))
        const history = useHistory()
        return (
        <div>
                <h2>Song Editor</h2>
                <label>ID</label>
                <input value={song.id}/><br/>
                <label>Title</label>
                <input
                    onChange={(e) =>
                        setSong(song =>
                            ({...song, title: e.target.value}))}
                    value={song.title}/>
                <label>Number of Plays</label>
                <input
                    onChange={(e) =>
                        setSong(song =>
                            ({...song, numberOfPlays: e.target.value}))}
                    value={song.numberOfPlays}/>

                <button
                    onClick={() => {
                            history.back()}}>
                        Cancel
                </button>
                <button
                    onClick={() => deleteSong(song.id)}>
                        Delete
                </button>
                <button
                    onClick={() => createSong(song)}>
                        Create
                </button>
                <button
                    onClick={() => updateSong(song.id, song)}>
                        Save
                </button>

                <br />
                <h3>Album</h3>
                <a href={`/cs3200-final-project/db-design-orm-assignment-master/src/main/webapp/react/Album/index.html?#/albums/${album.id}`}>
                    {album.title}
                </a>
        </div>
    )
}

export default SongFormEditor