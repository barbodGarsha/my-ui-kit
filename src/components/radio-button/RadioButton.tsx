import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

import './RadioButton.scss'

interface Props {
    title?: string;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'normal' | 'large'

    children ?: React.ReactNode;
}

function RadioButton({title = '', variant = 'primary', size = 'normal', ...props}: Props) {
  
  return (
    <div 
        className={"my-radio-button " + "my-radio-button--" + variant + " " +
        "my-radio-button--" + size }
        data-testid="radio-button">
        {props.children}
    </div>
  );
}

export default RadioButton;
