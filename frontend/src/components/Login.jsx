import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login({ onLogin }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formValue;
    if (!email || !password) {
      return;
    }
    onLogin(email, password);
  }

  return (
    <form action="form" onSubmit={handleSubmit} className="login">
      <h2 className="login__title">Вход</h2>
      <input
        name="email"
        type="email"
        className="login__input"
        placeholder="Email"
        value={formValue.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="text"
        className="login__input"
        placeholder="Пароль"
        value={formValue.password}
        onChange={handleChange}
      />
      <button type="submit" className="login__btn">
        Войти
      </button>
      <div className="login__link">
        <p>Ещё не зарегистрированы?</p>
        <Link to="/sign-up" className="login__route">
          Зарегистрироваться
        </Link>
      </div>
    </form>
  );
}
