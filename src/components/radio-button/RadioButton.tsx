import classNames from 'classnames';
import React, {useState, useRef, useEffect, Children, HTMLAttributes, ReactFragment } from 'react';

import RadioButtonItem from './RadioButtonItem';
import './RadioButton.scss'
import { type } from 'os';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'normal' | 'large'

    checked_btn_index?: number;
    children ?: React.ReactNode;
    on_input_change?: (index: number) => void;
}

function RadioButton({title = '', variant = 'primary', size = 'normal', checked_btn_index = 0, ...props}: Props) {

  const radio_button = useRef<HTMLDivElement>(null);

  let childern = React.Children.toArray(props.children);
  childern.map((item, i) => {
    if (React.isValidElement(item)) {
      if(item.type !== RadioButtonItem) {
        childern.splice(i, 1);
      }
    }
  })  

  let [options, set_options] = useState(childern as ReactFragment[]);
  let [index, set_index] = useState(checked_btn_index);

  useEffect(() => {
    
    const items = radio_button.current?.querySelectorAll('[data-radio-button__item]');

    items?.forEach(item => {
      item.classList.remove("my-radio-button__item--checked")
    })

    if(items && items.length > 0) {
      items[index].classList.add("my-radio-button__item--checked");
    }
  });


  function handle_on_click(e: React.MouseEvent<HTMLElement>){
    const el = e.target as HTMLElement;
    
    const el_parent = el.parentNode as HTMLElement;
    const items = radio_button.current?.querySelectorAll('[data-radio-button__item]')
    
    items?.forEach((item, i) => {
      if(item === el_parent) 
      {
        if(i != index) { 
          set_index(i); 
          if(props.on_input_change) {
            props.on_input_change(i);
          }
        }
      }
    })      
  }
  
  return (
    <div
        ref={radio_button} 
        className={"my-radio-button " + "my-radio-button--" + variant + " " +
        "my-radio-button--" + size }
        data-testid="radio-button"
        
        onClick={handle_on_click}>   
        {
         options
        }
        
    </div>
  );
}

export default RadioButton;
