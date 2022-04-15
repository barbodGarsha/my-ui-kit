import classNames from 'classnames';
import React from 'react';

import './Button.scss'

interface Props {
  text: string;
  variant: 'primary' | 'secondary';
}

function Button(props: Props) {
  return (
    <button className={"my-button " + "my-button--" + props.variant}>
      <p className="my-button__txt" data-testid="button__txt">{props.text}</p>
    </button>
  );
}

export default Button;
