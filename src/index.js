import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'; 
import { NotesProvider } from './NotesProvider';
import { reducer, initialState } from './reducer';

ReactDOM.render(
    <NotesProvider reducer={reducer} initialState={initialState}>
        <App />
    </NotesProvider>,
    document.getElementById("root")
);