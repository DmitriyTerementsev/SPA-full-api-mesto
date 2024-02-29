import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({ onRegister }) {
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
    onRegister(email, password);
  }

  return (
    <form action="form" onSubmit={handleSubmit} className="login">
      <h2 className="login__title">Регистрация</h2>
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
        type="password"
        className="login__input"
        placeholder="Пароль"
        value={formValue.password}
        onChange={handleChange}
      />
      <button type="submit" className="login__btn">
        Зарегистрироваться
      </button>
      <div className="login__link">
        <p>Уже зарегистрированы?</p>
        <Link to="/sign-in" className="login__route">
          Войти
        </Link>
      </div>
    </form>
  );
}
