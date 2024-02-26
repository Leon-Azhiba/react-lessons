import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';
import { addPost } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let reRenderEntireTree = () => {
  root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={state} addPost={addPost} />
    </BrowserRouter>
  </React.StrictMode>
);
}