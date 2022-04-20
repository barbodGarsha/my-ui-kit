import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

import './RadioButton.scss'

interface Props {
  checked ?: boolean;

  children ?: React.ReactNode;
}

function RadioButtonItem({checked = false, ...props}: Props) {

  return (
    <div
        data-radio-button__item  
        className={"my-radio-button__item " + classNames({"my-radio-button__item--checked" : checked})}
        data-testid="radio-button__item">
        <div data-radio-button__item__toggle data-testid="radio-button__item__toggle" className={"my-radio-button__item__toggle"}></div>
        {props.children}
    </div>
  );
}

export default RadioButtonItem;
