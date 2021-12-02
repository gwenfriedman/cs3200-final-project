const {Link, useHistory} = window.ReactRouterDOM;

import singerService from "./singer-service"
const { useState, useEffect } = React;

const SingerList = () => {
    const [singers, setSingers] = useState([])
    useEffect(() => {
        findAllSingers()
    }, [])
    const findAllSingers = () =>
        singerService.findAllSingers()
            .then(singers => setSingers(singers))
    const history = useHistory()
    return(
        <div>
            <h2>Singers</h2>
            <button className="btn btn-primary" onClick={() => history.push("/singers/new")}>
                Add Singer
            </button>
            <ul className="list-group">
                {
                    singers.map(singer =>
                        <li className="list-group-item"
                            key={singer.id}>
                            <Link to={`/singers/${singer.id}`}>
                                {singer.firstName},
                                {singer.lastName},
                                {singer.username}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default SingerList;