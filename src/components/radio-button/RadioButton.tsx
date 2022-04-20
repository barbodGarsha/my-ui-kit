import classNames from 'classnames';
import React, {useState, useRef, useEffect, Children, HTMLAttributes, ReactFragment } from 'react';

import RadioButtonItem from './RadioButtonItem';
import './RadioButton.scss'
import { type } from 'os';

interface Props {
    title?: string;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'normal' | 'large'

    checked_btn_index?: number;
    children ?: React.ReactNode;
}

function RadioButton({title = '', variant = 'primary', size = 'normal', checked_btn_index = 0, ...props}: Props) {

  let childern = React.Children.toArray(props.children);
  childern.map((item, i) => {
    if (React.isValidElement(item)) {
      if(item.type !== RadioButtonItem) {
        childern.splice(i, 1);
      }
    }
  })  

  useEffect(() => {
    
    const items = radio_button.current?.querySelectorAll('[data-radio-button__item]');
    if(items && items.length > 0) {
      items[checked_btn_index].classList.add("my-radio-button__item--checked");
    }
    
  });

  

  const radio_button = useRef<HTMLDivElement>(null);
  let [options, set_options] = useState(childern as ReactFragment[]);

  function handle_on_click(e: React.MouseEvent<HTMLElement>){
    const el = e.target as HTMLElement;
    if(el.hasAttribute('data-radio-button__item__toggle'))
    {
      const el_parent = el.parentNode as HTMLElement;
      const items = radio_button.current?.querySelectorAll('[data-radio-button__item]')
      
      items?.forEach(item => {
        item.classList.remove("my-radio-button__item--checked")
      })
      el_parent.classList.add("my-radio-button__item--checked");
    }
  }
  
  return (
    <div
        ref={radio_button} 
        className={"my-radio-button " + "my-radio-button--" + variant + " " +
        "my-radio-button--" + size }
        data-testid="radio-button"
        
        onClick={handle_on_click}
        >
        {  
          options
        }
    </div>
  );
}

export default RadioButton;
