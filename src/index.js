import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProfilesPage from './Pages/ProfilesPage/ProfilesPage';
import { Provider } from 'react-redux';
import { store } from './store';
import CreateUserPage from './Pages/CreateUserPage/CreateUserPage';
import AuthTemplatePage from './Pages/Templates/AuthTemplatePage';
import LoginUserPage from './Pages/CreateUserPage/LoginUserPage';
import ProtectedComponent from './Components/ProtectedComponent';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
import MovieDetailPage from './Pages/MoviesPage/MovieDetailPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<ProfilesPage />} />
            <Route path="/movie">
              <Route path="/movie" element={<MoviesPage />} />
              <Route path="/movie/:id" element={<ProtectedComponent><MovieDetailPage /></ProtectedComponent>} />
            </Route>
          </Route>
          <Route path="/auth" element={<AuthTemplatePage />}>
            <Route path="register" element={<CreateUserPage />} />
            <Route path="login" element={<LoginUserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
