import classNames from 'classnames';
import React from 'react';

import './Button.scss'

interface Props {
  text: string;
  variant?: 'primary' | 'secondary';
}

function Button({text, variant = 'primary'}: Props) {
  return (
    <button className={"my-button " + "my-button--" + variant} data-testid="button">
      <p className="my-button__txt" data-testid="button__txt">{text}</p> 
    </button>
  );
}

export default Button;
