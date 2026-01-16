import Header from "./Header";
import { useState } from "react";

function Register({ onSwitchToLogin }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.includes("@")) {
      setError("Адреса електронної пошти повинна містити символ '@'.");
      return;
    }

    if (username.trim() === "") {
      setError("Ім’я користувача не може бути порожнім.");
      return;
    }

    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, username, password }),
    });

    if (res.ok) {
      setSuccess("Реєстрація успішна. Тепер увійдіть.");
    } else {
      setError("Користувач з таким email вже існує.");
    }
  };

  return (
    <div>
      <Header showTopBar={false} />
      <form onSubmit={handleSubmit} noValidate>
        <h2>Реєстрація</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Ім’я користувача"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <p>
          Вже є акаунт?
          <button type="button" onClick={onSwitchToLogin}>
            Увійти
          </button>
        </p>
        <button type="submit">Зареєструватися</button>
      </form>
    </div>
  );
}

export default Register;