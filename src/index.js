import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './Main';
import {
  RouterProvider,
  createMemoryRouter,
  Router
} from "react-router-dom";
import SendTokenConfirmPage from './components/extension-component/send-token-confirm/SendTokenConfirmPage';
import App from './App'
import './fonts/PPEditorialNew-Light.ttf'
import './fonts/system85-regular-trial.otf'

const router = createMemoryRouter([
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/send-token-confirm",
    element: <SendTokenConfirmPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
