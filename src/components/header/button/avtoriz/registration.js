import React, {useState} from 'react';
import css from './registration.module.scss';

function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [ID, setID] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [error, setError] = useState(false);

    const handleUsername = (event) => {
        setUsername(event.target.value);
        setIsAuthenticated(false);
      };

      const handleEmail = (event) => {
        setEmail(event.target.value);
        setIsAuthenticated(false);
      };

      const handlePassword = (event) => {
        setPassword(event.target.value);
        setIsAuthenticated(false);
      };

      const handleID = (event) => {
        setID(event.target.value);
        setIsAuthenticated(false);
      };

      const handleFirstname = (event) => {
        setFirstname(event.target.value);
        setIsAuthenticated(false);
      };

      const handleLastname = (event) => {
        setLastname(event.target.value);
        setIsAuthenticated(false);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (username === '' || email === '' || password === '' || ID === '' || firstname === '' || lastname === '') {
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
            <h1>Пользователь {username} успешно зарегистрирован!!!</h1>
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
        <div className="form">
            <form className={css.registration}>
              <div className="messages">
                {errorMessage()}
                {successMessage()}
              </div>  
              <button name="close-button">&times;</button>
              <label htmlFor="username">Логин:</label>
              <input 
                type="text" 
                id="username"
                value={username}
                onChange={handleUsername}
              />
              <br/>
              <label htmlFor="password">Пароль:</label>
              <input 
                type="password"
                id="password"
                value={password}
                onChange={handlePassword} 
              />
              <br/>
              <label htmlFor="email">Email</label>
              <input 
                type="email"
                id="email"
                onChange={handleEmail} 
                value={email} 
              />
              <br/>
              <label htmlFor="ID">ID клиента</label>
              <input 
                type="ID"
                id="ID"
                onChange={handleID} 
                value={ID} 
              />
              <br/>
              <label htmlFor="firstname">Ваше имя:</label>
              <input 
                type="text" 
                id="firstname"
                value={firstname}
                onChange={handleFirstname}
              />
              <br/>
              <label htmlFor="lastname">Ваша фамилия:</label>
              <input 
                type="text" 
                id="lastname"
                value={lastname}
                onChange={handleLastname}
              />
              <button name="button_2" type="submit" onClick={handleSubmit}>Зарегистрироваться</button>
            </form>
        </div>
      );
  }
  
  export default Registration;