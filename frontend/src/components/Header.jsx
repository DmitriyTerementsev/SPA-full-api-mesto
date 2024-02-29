import headerLogo from "../images/Vector.svg";
import { Link, Route, Routes } from "react-router-dom";
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Header({ signOut }) {
  const user = useContext(CurrentUserContext);
  const email = user?.email;
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Лого Место" />
      
      <div className="header__links">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2 className="header__email">{email}</h2>
                <Link to="/sign-in" className="header__link" onClick={signOut}>
                  Выйти
                </Link>
              </>
            }
          />
          <Route
            path="/sign-in"
            element={
              <Link to="/sign-up" className="header__link">
                Регистрация
              </Link>
            }
          />
          <Route
            path="/sign-up"
            element={
              <Link to="/sign-in" className="header__link">
                Войти
              </Link>
            }
          />
        </Routes>
      </div>
    </header>
  );
}

export default Header;
