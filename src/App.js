import React from "react";
import { createBrowserHistory } from 'history';
import {
   Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
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
  return (
    <Router history={history}>
      <div id="app">
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <ProtectedRoute path="/dashboard" component={HomePage} exact />
            <ProtectedRoute path="/planner" component={PlannerPage} />
            <ProtectedRoute path="/workspace" component={WorkspacePage} exact/>
            <ProtectedRoute path="/workspace/create" component={WorkspaceCreatePage}  />
            <ProtectedRoute path="/marketplace" component={MarketplacePage} />
            <ProtectedRoute path="/library" component={LibraryPage} />
            <ProtectedRoute path="/message" component={MessagePage} />

            <Route path="/" component={LoginPage} />

          </Switch>
      </div>
    </Router>
  );
}

export default App;
