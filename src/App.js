import React from "react";
import {
  BrowserRouter as Router,
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

function App() {
  return (
    <Router>
      <div id="app">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/planner" component={PlannerPage} />
            <Route path="/workspace" component={WorkspacePage} exact/>
            <Route path="/workspace/create" component={WorkspaceCreatePage}  />
            <Route path="/marketplace" component={MarketplacePage} />
            <Route path="/library" component={LibraryPage} />
            <Route path="/message" component={MessagePage} />
          </Switch>
      </div>

    </Router>
  );
}

export default App;
