import React, {useState} from 'react';
import LoginForm from './loginForm';

function Modal_avtoriz() {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
  
    const handleClick = () => {
      setIsButtonClicked(true);
    };
  
    return (
      <div>
        {!isButtonClicked && <button onClick={handleClick}>Войти</button>}
        {isButtonClicked && <LoginForm/>} 
      </div>
    );
  }
  
  export default Modal_avtoriz;