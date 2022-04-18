import React from 'react';
import { render, screen } from '@testing-library/react';
import TextBox from './TextBox';

test('Primary TextBox has the right ClassNames', () => {
   
    const place_holder = "Testing";

    const {getByTestId} = render(<TextBox place_holder={place_holder} variant='primary'></TextBox>);
    const my_TextBox = getByTestId('textbox');

    
    expect(my_TextBox).toHaveClass('my-textbox--primary');
});

test('Secondary TextBox has the right ClassNames', () => {
   
    const place_holder = "Testing";

    const {getByTestId} = render(<TextBox place_holder={place_holder} variant='secondary'></TextBox>);
    const my_TextBox = getByTestId('textbox');

    
    expect(my_TextBox).toHaveClass('my-textbox--secondary');
});
