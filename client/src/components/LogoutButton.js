import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class LogoutButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedOut: false
        }
    };

    logout = () => {
        fetch('/api/user/logout', {
            method:'delete'
        }).then( () => this.setState({ loggedOut: true}));
    }

    render() {
        this.logout();
        localStorage.removeItem("state-diagnostic-token");
        if (this.state.loggedOut) {
            return <Redirect to="login" />;
        }
        return (
          <Redirect to="login" />
          // <div id="logout-button-holder">
          //     <button onClick={this.logout}>Logout</button>
          // </div>
        );
    }
}
export default LogoutButton;