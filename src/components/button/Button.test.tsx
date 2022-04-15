import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button renders the given text', () => {
   
    const text = "Testing";

    const {getByTestId} = render(<Button text={text} variant='primary'></Button>);
    const my_button__txt = getByTestId('button__txt');
    expect(my_button__txt.textContent).toBe(text);
});

test('Primary Button has the right ClassNames', () => {
   
    const text = "Testing";

    const {getByTestId} = render(<Button text={text} variant='primary'></Button>);
    const my_button = getByTestId('button');

    
    expect(my_button).toHaveClass('my-button--primary');
});

test('Secondary Button has the right ClassNames', () => {
   
    const text = "Testing";

    const {getByTestId} = render(<Button text={text} variant='secondary'></Button>);
    const my_button = getByTestId('button');

    
    expect(my_button).toHaveClass('my-button--secondary');
});
