import React, {useState} from 'react';
import Registration from './registration';

function Modal_registration() {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
  
    const handleClick = () => {
      setIsButtonClicked(true);
    };
  
    return (
      <div>
        {!isButtonClicked && <button onClick={handleClick}>Регистрация</button>}
        {isButtonClicked && <Registration/>}
        
      </div>
    );
  }
  
  export default Modal_registration;