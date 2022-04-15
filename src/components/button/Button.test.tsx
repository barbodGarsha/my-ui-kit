import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button renders the given text', () => {
   
    const text = "Testing";

    const {getByTestId} = render(<Button text={text} variant='primary'></Button>);
    const my_button = getByTestId('button__txt');
    expect(my_button.textContent).toBe(text);
});
