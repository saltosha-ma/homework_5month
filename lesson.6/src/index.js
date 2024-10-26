import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/UsersSlice"; // Импортируем редюсер

export const store = configureStore({
    reducer: {
        users: usersReducer, // Подключаем редюсер пользователей
    },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
