import React from 'react';
import { render, screen, within } from '@testing-library/react';
import RadioButton from './RadioButton';
import RadioButtonItem from './RadioButtonItem';
import exp from 'constants';

test('Primary RadioButton has the right ClassNames', () => {
   
    const title = "Testing";

    const {getByTestId} = render(<RadioButton title={title} variant='primary'></RadioButton>);
    const my_RadioButton = getByTestId('radio-button');
    
    expect(my_RadioButton).toHaveClass('my-radio-button--primary');
});

test('Secondary RadioButton has the right ClassNames', () => {
   
    const title = "Testing";

    const {getByTestId} = render(<RadioButton title={title} variant='secondary'></RadioButton>);
    const my_RadioButton = getByTestId('radio-button');
    
    expect(my_RadioButton).toHaveClass('my-radio-button--secondary');
});

test('RadioButton Component can only contain RadioButtonItems.', () => {
    const title = "Testing";
    const {getByTestId} = render(
    
    <RadioButton title={title} variant='secondary'>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
        <p>ERROR</p>
    </RadioButton>);

    const my_RadioButton = getByTestId('radio-button');

    const my_RadioButtonItems = within(my_RadioButton).getAllByTestId('radio-button__item');
    expect(my_RadioButton.children.length).toBe(my_RadioButtonItems.length);
});


test('Only one RadioButtonItem can be checked.', () => {
    const title = "Testing";
    const {getByTestId} = render(
    
    <RadioButton title={title} variant='secondary'>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
    </RadioButton>);

    const my_RadioButton = getByTestId('radio-button');

    const my_RadioButtonItems = within(my_RadioButton).getAllByTestId('radio-button__item');
    let counter = 0;
    my_RadioButtonItems.forEach(item => {
        if(item.classList.contains('my-radio-button__item--checked'))
        {
            counter++;
        }
    });

    expect(counter).toBe(1);

    
    my_RadioButtonItems.forEach(item => {
        counter = 0;
        item.click();
        within(item).getByTestId('radio-button__item__toggle').click();
        my_RadioButtonItems.forEach(item_02 => {
            if(item_02.classList.contains('my-radio-button__item--checked'))
            {
                counter++;
            }
        });
    
        expect(counter).toBe(1);
    });
});

test('RadioButtonItem Click works.', () => {
    const title = "Testing";
    const {getByTestId} = render(
    
    <RadioButton title={title} variant='secondary' checked_btn_index={4}>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
        <RadioButtonItem></RadioButtonItem>
    </RadioButton>);

    const my_RadioButton = getByTestId('radio-button');

    const my_RadioButtonItems = within(my_RadioButton).getAllByTestId('radio-button__item');
  
    let init_checked_item_index = 0;
    
    for(const item of my_RadioButtonItems) {
        if(item.classList.contains('my-radio-button__item--checked')) { break; }
        init_checked_item_index++;
    }
    
    let has_changed = false;

    for(let i = 0; i < my_RadioButtonItems.length; i++) {
        within(my_RadioButtonItems[init_checked_item_index]).getByTestId('radio-button__item__toggle').click();
        has_changed = false;
        if(i != init_checked_item_index) {
            within(my_RadioButtonItems[i]).getByTestId('radio-button__item__toggle').click();
            console.log("CHECKED: "+ i + " INIT: " + init_checked_item_index);
            if(i != init_checked_item_index) { has_changed = true; }
            expect(has_changed).toBe(true);
        }
    }

});