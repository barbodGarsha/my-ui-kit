import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/button/Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Click Me',
  variant: 'primary'
};

export const Secondary = Template.bind({});

Secondary.args = {
  text: 'Click Me',
  variant: 'secondary'
};

export const Large = Template.bind({});

Large.args = {
  text: 'Click Me',
  size: 'large'
};

export const Small = Template.bind({});

Small.args = {
  text: 'Click Me',
  size: 'small'
};

export const Without_Round_Corners = Template.bind({});

Without_Round_Corners.args = {
  text: 'Click Me',
  round_corners: false
};

