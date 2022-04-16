import classNames from 'classnames';
import React from 'react';

import './Button.scss'

interface Props {
  text: string;
  variant?: 'primary' | 'secondary';
  round_corners?: boolean;
}

function Button({text, variant = 'primary', round_corners = true}: Props) {
  return (
    <button className={"my-button " + "my-button--" + variant + " " + classNames({"my-button--round-corners" : round_corners})} data-testid="button">
      <p className="my-button__txt" data-testid="button__txt">{text}</p> 
    </button>
  );
}

export default Button;
