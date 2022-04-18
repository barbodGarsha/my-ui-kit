import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

import './TextBox.scss'

interface Props{
  place_holder: string;
  variant?: 'primary' | 'secondary';
  round_corners?: boolean;
  size?: 'small' | 'normal' | 'large';
}

function TextBox({place_holder, variant = 'primary', round_corners = true, size = 'normal'}: Props) {
  
  return (
      <input type="text" placeholder={place_holder} 
      className={"my-textbox " + "my-textbox--" + variant + " " 
      + "my-textbox--" + size + " " 
      + classNames({"my-textbox--round-corners" : round_corners})} 
      data-testid="textbox"
      />
  );
}

export default TextBox;
