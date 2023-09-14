import { Spinner, Navbar, NavbarBrand, Nav, NavItem, Button } from "reactstrap";
import TodoList from "./pages/TodoList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Context from "./Context";
import { useEffect, useState } from "react";
import "./App.css";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm";
import Profile from "./pages/Profile";
//import Contact from "./pages/Contact";
import axios from "./api/axiosInstance";

function App() {
  const [appState, setAppState] = useState({ loading: false, user: null });

  const logoutUser = async () => {
    setAppState({ ...appState, loading: true });
    await axios.post("/dj-rest-auth/logout/");
    localStorage.clear("tmng-user");
    setAppState({ loading: false, user: null });
  };

  const profile = () => {
    window.location = "/profile";
  };

  const contact = () => {
    window.location = "/contact";
  }

  const checkuser = () => {
    const localUserData = localStorage.getItem("tmng-user");
    if (localUserData) {
      return true;
    }
    return false
  }
  return (
    <div className="task-manager">
      <Navbar className="mb-5" color="dark" dark>
        <NavbarBrand href="/">Task Manager</NavbarBrand>
        {appState.user && (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button
                color="link"
                style={{ color: "#fff" }}
                onClick={profile}
              >
                Profile
              </Button>
              <Button
                color="link"
                style={{ color: "#fff" }}
                onClick={contact}
              >
                Contact
              </Button>
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
                    <Route exact path="/signup">
                      <SignUpForm />
                    </Route>
                    <Route exact path="/signin">
                      <SignInForm />
                    </Route>                    
                    <Route 
                      path="/profile"
                      render={() =>
                        checkuser ? <Profile /> : <Redirect to="/signin" />
                      }>
                    </Route>
                    <Route 
                      path="/contact"
                      render={() =>
                        checkuser ? <Contact /> : <Redirect to="/signin" />
                      }>
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
