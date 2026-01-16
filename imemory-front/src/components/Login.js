import { useState } from "react";
import Header from "./Header";

function Login({ onLogin, onSwitchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Адреса електронної пошти повинна містити символ '@'.");
      return;
    }

    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token);
      onLogin();
    } else {
      setError("Неправильна пошта або пароль.");
    }
  };

  return (
    <div>
      <Header showTopBar={false} />
      <form onSubmit={handleSubmit} noValidate>
        <h2>Вхід</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Увійти</button>
        <button type="button" onClick={onSwitchToRegister}>
          Реєстрація
        </button>
      </form>
    </div>
  );
}

export default Login;