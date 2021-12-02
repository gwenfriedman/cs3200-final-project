import SingerList from "./singers/singer-list";
import SingerFormEditor from "./singers/singer-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
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
