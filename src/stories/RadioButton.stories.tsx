import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioButton from '../components/radio-button/RadioButton';
import RadioButtonItem from '../components/radio-button/RadioButtonItem';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'My UI Kit/Inputs/RadioButton',
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

//👇 We create a “template” of how args map to rendering
export const My_Radio_Button: ComponentStory<typeof RadioButton> = (args) => (
    <RadioButton {...args}>
      <RadioButtonItem/>
      <RadioButtonItem/>
      <RadioButtonItem/>
      <RadioButtonItem/>
    </RadioButton>
);

My_Radio_Button.storyName = "Primary";

export const Secondary = My_Radio_Button.bind({});

Secondary.args = {
 variant: 'secondary'
};

export const Large = My_Radio_Button.bind({});

Large.args = {
  size: 'large'
};

export const Small = My_Radio_Button.bind({});

Small.args = {
  size: 'small'
};
