const {Link, useHistory} = window.ReactRouterDOM;

import songService from "./song-service"
const { useState, useEffect } = React;

const SongList = () => {
    const [songs, setSongs] = useState([])
    useEffect(() => {
        findAllSongs()
    }, [])
    const findAllSongs = () =>
        songService.findAllSongs()
            .then(songs => setSongs(songs))
    const history = useHistory()
    return(
        <div>
            <h2>Songs</h2>
            <button className="btn btn-primary" onClick={() => history.push("/songs/new")}>
                Add Song
            </button>
            <ul className="list-group">
                {
                    songs.map(song =>
                        <li className="list-group-item"
                            key={song.id}>
                            <Link to={`/songs/${song.id}`}>
                                {song.title},
                                {song.numberOfPlays}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default SongList;