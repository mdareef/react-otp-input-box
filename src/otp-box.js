import React  from 'react';

import './otp-box.css';

const OTPBox = (props) => {
  
    const handleInputOnValueChange = (e, item, index) => {
        const { inputOnValueChange } = props;
        inputOnValueChange(e, item, index);
    }

 
    const { item, index } = props;
    return (
      <span className="otp-box">
        <input
          type="tel"
          name={item}
          key={`digit-${item}`}
          id={`digit-${index}`}
          maxLength="1"
          size="1"
          min="0"
          max="9"
          autoFocus={index !== 0 ? undefined : true}
          onChange={e => handleInputOnValueChange(e, item, index)}
          onKeyUp={e => handleInputOnValueChange(e, item, index)}
          autocomplete="new-password"
          required
          pattern="[0-9]{1}"
        />
      </span>
    );
}

export default OTPBox;
