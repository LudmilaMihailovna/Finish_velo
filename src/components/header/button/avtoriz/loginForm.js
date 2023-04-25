import React, {useState} from 'react';
import css from './loginForm.module.scss';
import Modal_avtoriz from './modal_avtoriz';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(false);

    const handleUsername = (event) => {
        setUsername(event.target.value);
        setIsAuthenticated(false);
      };

      const handlePassword = (event) => {
        setPassword(event.target.value);
        setIsAuthenticated(false);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (username === '' || password === '') {
          setError(true);
        } else {
            setIsAuthenticated(true);
          setError(false);
        }
      };
     
      const successMessage = () => {
        return (
          <div
            className="success"
            style={{
              display: isAuthenticated ? '' : 'none',
            }}>
            <h1>Пользователь {username} успешно зашёл!!!</h1>
          </div>
        );
      };
     
      const errorMessage = () => {
        return (
          <div
            className="error"
            style={{
              display: error ? '' : 'none',
            }}>
            <h1>Пожалуйста, заполните все поля</h1>
          </div>
        );
      };


    return (     
        <div>
            <form className={css.loginForm}>
              <div className="messages">
                {errorMessage()}
                {successMessage()}
              </div>  
              <button name="close-button">&times;</button>
              <label name="label_1" htmlFor="username">Логин:</label>
              <input 
                type="text" 
                id="username"
                value={username}
                onChange={handleUsername}
              />
              <br/>
              <label name="label_2" htmlFor="password">Пароль:</label>
              <input 
                type="password"
                id="password"
                value={password}
                onChange={handlePassword} 
              />
              <br/>
              <button name="button_1" type="submit" onClick={handleSubmit} >Вход</button>
            </form>

        </div>
      );
  }
  
  export default LoginForm;

