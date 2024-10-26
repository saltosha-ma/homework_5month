import './App.css';
import React from "react";
import { Provider } from "react-redux";
import { store } from "./index"; // Подключаем хранилище из index.js
import UsersList from "./components/UserList";

const App = () => {
  return (
      <Provider store={store}>
        <div className="App">
          <UsersList />
        </div>
      </Provider>
  );
};

export default App;