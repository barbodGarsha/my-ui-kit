import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

import './RadioButton.scss'

interface Props {
    variant?: 'empty' | 'text';

    children ?: React.ReactNode;
}

function RadioButtonItem({variant = 'empty', ...props}: Props) {
  
  return (
    <div 
        className={"my-radio-button__item " + "my-radio-button__item--" + variant}
        data-testid="radio-button__item-id">
        <div className="my-radio-button__item__toggle">
        </div>
        {props.children}
    </div>
  );
}

export default RadioButtonItem;
