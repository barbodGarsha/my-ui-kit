import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

import './Button.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
  variant?: 'primary' | 'secondary';
  round_corners?: boolean;
  size?: 'small' | 'normal' | 'large'
}

function Button({text, variant = 'primary', round_corners = true, size = 'normal', ...props}: Props) {
  
  return (
    <button {...props}
      className={"my-button " + "my-button--" + variant + " " +
     "my-button--" + size + " " +
      classNames({"my-button--round-corners" : round_corners})} 
      data-testid="button">

      <p className="my-button__txt" data-testid="button__txt">{text}</p> 
    </button>
  );
}

export default Button;
