import singerService from "./singer-service"
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;
const SingerFormEditor = () => {
        const {id} = useParams()
        const [singer, setSinger] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findSingerById(id)
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
        </div>
    )
}

export default SingerFormEditor