import SongList from "./songs/song-list";
import SongFormEditor from "./songs/song-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
            <a href="http://localhost:63342/cs3200-final-project/db-design-orm-assignment-master/src/main/webapp/index.html?_ijt=voja77vc3ja4u9sbsar72jiftt&_ij_reload=RELOAD_ON_SAVE"> Home </a>
                <Route path={["/songs", "/"]} exact={true}>
                    <SongList/>
                </Route>
                <Route path="/songs/:id" exact={true}>
                    <SongFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
