import React from 'react';
// const Button = ({ text }) => <button>{text}</button>;
const Button = function({children}){
  return <button>{children}</button>;
}
export default Button;
