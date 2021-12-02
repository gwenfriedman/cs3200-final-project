import SingerList from "./singers/singer-list";
import SingerFormEditor from "./singers/singer-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
            <a href="http://localhost:63342/cs3200-final-project/db-design-orm-assignment-master/src/main/webapp/index.html?_ijt=voja77vc3ja4u9sbsar72jiftt&_ij_reload=RELOAD_ON_SAVE"> Home </a>
                <Route path={["/singers", "/"]} exact={true}>
                    <SingerList/>
                </Route>
                <Route path="/singers/:id" exact={true}>
                    <SingerFormEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
