import React, { Component } from 'react';
import './App.css';
import OTPBox from './otp-box';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        otp:[]
      }
  }

  inputOnValueChange = (event, item, index) => {
    event.stopPropagation();
    const { otp } = this.state;
    const { value } = event.target;
    const prevDigit = index - 1;
    const nextDigit = index + 1;
    const key = event.keyCode || event.charCode;
    otp[item] = value.replace(/[^0-9]/g,'');;
    console.log(otp[item])
    if ((key === 8 || key === 37) && item !== 0) {
      document.getElementById(`digit-${prevDigit}`).select();
    } else if (((key >= 48 && key <= 57) || (key >= 65 && key <= 90) || (key >= 96 && key <= 105) || key === 39) && value && item !== 3) {
      document.getElementById(`digit-${nextDigit}`).select();
    }
    this.setState({ 
      otp,
   });
};

  render() {
    return (
      <div className="App">
          <div className="login-otp-number">
              {[0, 1, 2, 3].map((item, index) => {
                  return (
                      <OTPBox
                          inputOnValueChange={this.inputOnValueChange}
                          item={item}
                          index={index}
                          key={`digit-${item}`}
                          autocomplete="off"
                      />
                  );
              })}
          </div>
      </div>
    );
  }
}

export default App;
