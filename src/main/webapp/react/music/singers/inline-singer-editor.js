const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineSingerEditor = ({singer, deleteSinger, updateSinger}) => {
    const [singerCopy, setSingerCopy] = useState(singer)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={SingerCopy.firstName}
                            onChange={(e)=>setSingerCopy(singerCopy => ({...singerCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={singerCopy.lastName}
                            onChange={(e)=>setSingerCopy(singerCopy => ({...singerCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={singerCopy.username}
                            onChange={(e)=>setSingerCopy(singerCopy => ({...singerCopy, username: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/singers/${singerCopy.id}/blogs`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateSinger(singerCopy.id, singerCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteSinger(singer.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/singers/${singerCopy.id}`}>
                            {singerCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/singers/${singerCopy.id}`}>
                            {singerCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/singers/${singerCopy.id}`}>
                            {singerCopy.username}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/singers/${singerCopy.id}/blogs`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default InlineSingerEditor;