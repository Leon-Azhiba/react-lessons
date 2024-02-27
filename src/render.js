import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost } from './redux/state';
import state from './redux/state';
import { updateNewPostText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let reRenderEntireTree = () => {
  root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
    </BrowserRouter>
  </React.StrictMode>
);
}