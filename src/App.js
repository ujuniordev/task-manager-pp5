import "./App.css";
import "./api/axiosDefaults";
import TodoList from "./pages/TodoList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="text-uppercase text-center my-4">Todo app</h1>
      <div className="row">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
