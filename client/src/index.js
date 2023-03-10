import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import AudioStore from "./store/AudioStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        audio: new AudioStore(),
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);

