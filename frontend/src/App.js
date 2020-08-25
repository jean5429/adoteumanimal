import React, { useState, useCallback } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import User from './user/containers/User';
import Home from './shared/containers/Home';
import MyAnimals from './animal/containers/MyAnimals';
import Details from './animal/containers/Details';
//import Animal from './animal/containers/Animal';
import NewAnimal from './animal/containers/NewAnimal';
import Auth from './user/containers/Auth';
import UpdateAnimal from './animal/containers/UpdateAnimal';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    });

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    });

    let routes;

    if (isLoggedIn) {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/usuario" exact>
                    <User />
                </Route>
                <Route path="/animal/novo" exact>
                    <NewAnimal />
                </Route>
                <Route path="/animal/:animalId" exact>
                    <Details />
                </Route>
                <Route path="/meusanimais" exact>
                    <MyAnimals />
                </Route>
                <Route path="/animal/edit/:animalId" exact>
                    <UpdateAnimal />
                </Route>
                <Redirect to="/" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/auth" exact>
                    <Auth />
                </Route>
                <Route path="/usuario" exact>
                    <User />
                </Route>
                <Route path="/animal/novo" exact>
                    <Redirect to="/auth" />
                </Route>
                <Route path="/animal/:animalId" exact>
                    <Details />
                </Route>
                <Redirect to="/auth" />
            </Switch>
        );
    }
    return (
        <AuthContext.Provider
            value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
        >
            <Router>
                <MainNavigation />
                <main>{routes}</main>
            </Router>
        </AuthContext.Provider>
    );
};

/* Default code which came on React
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
