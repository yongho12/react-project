import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import UserList from './components/UsersList';
import LoginPanel from './components/LoginPanel';
import CaseList from './components/CasesList';
import SignUp from './components/SignUp';
import LogoutButton from './components/LogoutButton'

function App() {

  return (
    <BrowserRouter>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          Diagnostic Service<i className="fab fa-react"></i>
        </h1>
        <ul className="nav-menu nav-links">
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
          <li>
            <NavLink to="/logout" activeClassName="active">
              Log Out
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" activeClassName="active">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/users" component= {UserList} />
        <Route path="/login" component={LoginPanel} />
        <Route path="/logout" component={LogoutButton} />
        <Route path="/cases" component={CaseList} />
        <Route path="/signup" component={SignUp} />
        <h1>My Home Page</h1>
      </Switch>
    </BrowserRouter>
  );

  // Yongho : below is working
  // return (
  //   <BrowserRouter>
  //     <nav className="NavbarItems">
  //       <ul className="nav-menu nav-links">
  //         <li>
  //           <NavLink to="/" activeClassName="active">
  //             Home
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/users" activeClassName="active">
  //             Users
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/cases" activeClassName="active">
  //             Diagnostic Cases
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/login" activeClassName="active">
  //             Log In
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/logout" activeClassName="active">
  //             Log Out
  //           </NavLink>
  //         </li>
  //         <li>
  //           <NavLink to="/signup" activeClassName="active">
  //             Sign Up
  //           </NavLink>
  //         </li>
  //       </ul>
  //     </nav>
  //     <Switch>
  //       <Route path="/users">
  //         <UserList />
  //       </Route>
  //       <Route path="/login" component={LoginPanel} />
  //       <Route path="/logout" component={LoginPanel} />
  //       <Route path="/cases" component={CaseList} />
  //       <Route path="/signup" component={SignUp} />
  //       <h1>My Home Page</h1>
  //     </Switch>
  //   </BrowserRouter>
  // );


}

export default App;
