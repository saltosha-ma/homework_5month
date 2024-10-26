import React, { useState } from "react";

function RegistrationForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = () => {
        if (isRegistered) {
            setErrorMessage("Пользователь уже зарегистрирован!");
            return;
        }

        if (!username ||  !password || !confirmPassword) {
            setErrorMessage("Все поля должны быть заполнены!");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Пароли не совпадают!");
            return;
        }

        setIsRegistered(true);
        setErrorMessage("Регистрация прошла успешно!");
    };

    return (
        <div>
            <h2>Регистрация</h2>
            <input
                type="text"
                placeholder="Логин"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Подтвердите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <button onClick={handleRegister}>Зарегистрироваться</button>
            <p>{errorMessage}</p>
        </div>
    );
}

export default RegistrationForm;
