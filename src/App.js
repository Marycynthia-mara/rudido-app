import React, { useState } from "react";
import { createBrowserHistory } from 'history';
import {
   Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailsPage from "./pages/DetailsPage";
import PlannerPage from "./pages/PlannerPage";
import WorkspacePage from "./pages/WorkspacePage";
import WorkspaceCreatePage from "./pages/WorkspaceCreatePage";
import MarketplacePage from "./pages/MarketplacePage";
import LibraryPage from "./pages/LibraryPage";
import MessagePage from "./pages/MessagePage";
// import ProtectedRoute from "./pages/ProtectedRoute";
import UnProtectedRoute from "./pages/UnProtectedRoute";



const history = createBrowserHistory();
function App() {

  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    if (toggle) {
      setToggle(false);
      // return;
    } else {
      setToggle(true);
      // return;
    }
  }
  return (
    <Router history={history}>
      <div id="app">
          <Switch>
            <UnProtectedRoute path="/" component={LoginPage} exact/>
            <UnProtectedRoute path="/login" component={LoginPage} exact/>
            <UnProtectedRoute path="/register" component={RegisterPage} exact/>
            {/* <Route path="/register" component={RegisterPage}></Route> */}
            <Route path="/details" component={DetailsPage}></Route>
            <Route path="/dashboard" component={HomePage} exact toggle={toggle} toggleHandler={toggleHandler} />
            <Route path="/planner" component={PlannerPage} exact/>
            <Route path="/workspace" component={WorkspacePage} exact/>
            <Route path="/workspace/create" component={WorkspaceCreatePage}  exact/>
            <Route path="/marketplace" component={MarketplacePage} exact/>
            <Route path="/library" component={LibraryPage} exact/>
            <Route path="/message" component={MessagePage} exact/>

            {/* <Route path="/" component={LoginPage} /> */}

          </Switch>
      </div>
    </Router>
  );
}

export default App;
