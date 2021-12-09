import singerService from "./singer-service"
const {useState, useEffect} = React;
const {useParams, useHistory, Link} = window.ReactRouterDOM;
const SingerFormEditor = () => {
        const {id} = useParams()
        const [singer, setSinger] = useState({})
        const [albums, setAlbums] = useState([])
        useEffect(() => {
                if(id !== "new") {
                        findSingerById(id)
                        getAlbums(id)
                }
        }, []);
        const findSingerById = (id) =>
            singerService.findSingerById(id).then(singer => setSinger(singer))
        const deleteSinger = (id) =>
            singerService.deleteSinger(id).then(() => history.back())
        const createSinger = (singer) =>
            singerService.createSinger(singer).then(() => history.back())
        const updateSinger = (id, newSinger) =>
            singerService.updateSinger(id, newSinger).then(() => history.back())
        const getAlbums = (id) =>
            singerService.getAlbums(id).then(albums => setAlbums(albums))
        return (
        <div>
                <h2>Singer Editor</h2>
                <label>ID</label>
                <input value={singer.id}/><br/>
                <label>First Name</label>
                <input
                    onChange={(e) =>
                        setSinger(singer =>
                            ({...singer, firstName: e.target.value}))}
                    value={singer.firstName}/>
                <label>Last Name</label>
                <input
                    onChange={(e) =>
                        setSinger(singer =>
                            ({...singer, lastName: e.target.value}))}
                    value={singer.lastName}/>
                <label>Username</label>
                <input
                    onChange={(e) =>
                        setSinger(singer =>
                            ({...singer, username: e.target.value}))}
                    value={singer.username}/>
                <label>Password</label>
                <input
                    onChange={(e) =>
                        setSinger(singer =>
                            ({...singer, password: e.target.value}))}
                    value={singer.password}/>

                <label>Email</label>
                <input
                    onChange={(e) =>
                        setSinger(singer =>
                            ({...singer, email: e.target.value}))}
                    value={singer.email}/>

                <label>Date of Birth</label>
                <input
                    onChange={(e) =>
                        setSinger(singer =>
                            ({...singer, dateOfBirth: e.target.value}))}
                    value={singer.dateOfBirth}/>

                <button
                    onClick={() => {
                            history.back()}}>
                        Cancel
                </button>
                <button
                    onClick={() => deleteSinger(singer.id)}>
                        Delete
                </button>
                <button
                    onClick={() => createSinger(singer)}>
                        Create
                </button>
                <button
                    onClick={() => updateSinger(singer.id, singer)}>
                        Save
                </button>

                <br />
                <h3>Albums</h3>
                <ul className="list-group">
                    {
                        albums.map(album =>
                            <li className="list-group-item"
                                key={album.id}>

                               <a href={`/cs3200-final-project/db-design-orm-assignment-master/src/main/webapp/react/Album/index.html?#/albums/${album.id}`}>
                                {album.title}
                               </a>
                            </li>)
                    }
                </ul>
        </div>
    )
}

export default SingerFormEditor