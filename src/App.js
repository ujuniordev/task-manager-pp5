import { Spinner } from "reactstrap";
import TodoList from "./pages/TodoList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Context from "./Context";
import { useState } from "react";
import "./App.css";
import "./api/axiosDefaults";

function App() {
  const [appState, setAppState] = useState({ loading: false });
  return (
    <div className="task-manager">
      <h1 className="text-uppercase text-center my-4">Task Manager</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            {appState.loading && (
              <div className="loader">
                <Spinner color="primary" />
                <span>Loading...</span>
              </div>
            )}
            <Context.Provider value={[appState, setAppState]}>
              <Router>
                <Switch>
                  <Route path="/signin">
                    <div>SignIn Component</div>
                  </Route>
                  <Route path="/signup">
                    <div>SignOut Component</div>
                  </Route>
                  <Route path="/">
                    <TodoList />
                  </Route>
                </Switch>
              </Router>
            </Context.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
