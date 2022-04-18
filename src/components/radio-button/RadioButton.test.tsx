import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

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
