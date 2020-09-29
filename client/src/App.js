import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import UserList from './components/UsersList';
import LoginPanel from './components/LoginPanel';
import CaseList from './components/CasesList';
import { UserContext } from './components/UserContext'


function App() {
  const { needLogin } = useContext(UserContext);

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName="active">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/cases" activeClassName="active">
              Diagnostic Cases
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active">
              Log In
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/users">
          <UserList />
        </Route>
        <Route path="/login" component={LoginPanel} />
        <Route path="/cases" component={CaseList} />
        <Route path="/">
          <h1>My Home Page</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
