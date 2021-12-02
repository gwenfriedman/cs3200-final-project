import songService from "./song-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const SongFormEditor = () => {
        const {id} = useParams()
        const [song, setSong] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findSongById(id)
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
        </div>
    )
}

export default SongFormEditor