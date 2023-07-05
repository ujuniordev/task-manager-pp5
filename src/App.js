import { Spinner, Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import TodoList from "./pages/TodoList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Context from "./Context";
import { useState } from "react";
import "./App.css";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import axios from "./api/axiosInstance";

function App() {
  const [appState, setAppState] = useState({ loading: false, user: null });

  const logoutUser = async () => {
    setAppState({ ...appState, loading: true });
    await axios.post("/dj-rest-auth/logout/");
    localStorage.clear("tmng-user");
    setAppState({ loading: false, user: null });
  };

  return (
    <div className="task-manager">
      <Navbar className="mb-5" color="dark" dark>
        <NavbarBrand href="/">Task Manager</NavbarBrand>
        {appState.user && (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button
                color="link"
                onClick={logoutUser}
                style={{ color: "#fff" }}
              >
                Logout
              </Button>
            </NavItem>
          </Nav>
        )}
      </Navbar>
      <div className="container">
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
                      <SignInForm />
                    </Route>
                    <Route path="/signup">
                      <SignUpForm />
                    </Route>
                    <Route
                      path="/"
                      render={() =>
                        appState.user ? <TodoList /> : <Redirect to="/signin" />
                      }
                    />
                  </Switch>
                </Router>
              </Context.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
