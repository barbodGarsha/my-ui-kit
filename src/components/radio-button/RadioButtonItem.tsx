import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

import './RadioButton.scss'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children ?: React.ReactNode;
}

function RadioButtonItem(props: Props) {

  return (
    <div
        data-radio-button__item  
        className={"my-radio-button__item"}
        data-testid="radio-button__item">
        <div {...props} data-radio-button__item__toggle data-testid="radio-button__item__toggle" className={"my-radio-button__item__toggle"}></div>
        {props.children}
    </div>
  );
}

export default RadioButtonItem;
