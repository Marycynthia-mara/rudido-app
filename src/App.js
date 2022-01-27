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
import ProtectedRoute from "./pages/ProtectedRoute";
import UnProtectedRoute from "./pages/UnProtectedRoute";



const history = createBrowserHistory();
function App() {

  const [toggle, setToggle] = useState(true);

  return (
    <Router history={history}>
      <div id="app">
          <Switch>
            <UnProtectedRoute path="/" component={LoginPage} exact/>
            <UnProtectedRoute path="/login" component={LoginPage} exact/>
            <UnProtectedRoute path="/register" component={RegisterPage} exact/>
            {/* <Route path="/register" component={RegisterPage}></Route> */}
            <Route path="/details" component={DetailsPage}></Route>
            <ProtectedRoute path="/dashboard" component={HomePage} exact toggle={toggle} onMenuClick={setToggle} />
            <ProtectedRoute path="/planner" component={PlannerPage} exact/>
            <ProtectedRoute path="/workspace" component={WorkspacePage} exact/>
            <ProtectedRoute path="/workspace/create" component={WorkspaceCreatePage}  exact/>
            <ProtectedRoute path="/marketplace" component={MarketplacePage} exact/>
            <ProtectedRoute path="/library" component={LibraryPage} exact/>
            <ProtectedRoute path="/message" component={MessagePage} exact/>

            {/* <Route path="/" component={LoginPage} /> */}

          </Switch>
      </div>
    </Router>
  );
}

export default App;
