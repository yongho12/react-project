import React, { useState } from 'react';
import App from '../App';
import { UserContext } from './UserContext';
//import { baseUrl } from './config';

const AppWithContext = () => {
    const localStorageToken = localStorage.getItem('state-diagnostic-token');

   // const [pokemon, setPokemon] = useState([]);
    //const [singlePokemon, setSinglePokemon] = useState(null);
    const [authToken, setAuthToken] = useState(localStorageToken);
    const [needLogin, setNeedLogin] = useState(!localStorageToken);

    const login = (token) => {
        window.localStorage.setItem('state-diagnostic-token', token);
        setAuthToken(token);
        setNeedLogin(false);
    };

    // const loadPokemon = async () => {
    //     const response = await fetch(`${baseUrl}/pokemon`, {
    //         headers: { Authorization: `Bearer ${authToken}` },
    //     });
    //     if (response.ok) {
    //         const pokemon = await response.json();
    //         setPokemon(pokemon);
    //     }
    // };

    // const getOnePokemon = async (id) => {
    //     const response = await fetch(`${baseUrl}/pokemon/${id}`, {
    //         headers: { Authorization: `Bearer ${authToken}` },
    //     });
    //     if (response.ok) {
    //         const pokemonResponse = await response.json();
    //         setSinglePokemon(pokemonResponse);
    //     }
    // };

    return (
        <UserContext.Provider
            value={{
                authToken,
                needLogin,
                login,
            }}
        >
            <App />
        </UserContext.Provider>
    );
};

export default AppWithContext;
