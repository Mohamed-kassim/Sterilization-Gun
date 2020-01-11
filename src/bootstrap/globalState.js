import React from 'react';
import { createGlobalState } from 'react-hooks-global-state';


const initialState = {
    position: {},
    appSettings: {},
    isLoggedIn: false,
    token:'',
    userData:{}
}

export const { GlobalStateProvider, useGlobalState } = createGlobalState(initialState);

