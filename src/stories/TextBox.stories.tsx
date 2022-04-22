import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextBox from '../components/textbox/TextBox';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'My UI Kit/Inputs/TextBox',
  component: TextBox,
} as ComponentMeta<typeof TextBox>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof TextBox> = (args) => <TextBox {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Primary';

Primary.args = {
    place_holder: 'Type something...',
    variant: 'primary'
};

export const Secondary = Template.bind({});

Secondary.storyName = 'Secondary';
Secondary.args = {
    place_holder: 'Type something...',
    variant: 'secondary'
};

export const Large = Template.bind({});

Large.storyName = 'Large';
Large.args = {
    place_holder: 'Type something...',
    size: 'large'
};

export const Small = Template.bind({});

Small.storyName = 'Small';
Small.args = {
    place_holder: 'Type something...',
    size: 'small'
};


export const Without_Round_Corners = Template.bind({});

Without_Round_Corners.storyName = 'Without Round Corners';

Without_Round_Corners.args = {
    place_holder: 'Type something...',
    round_corners: false
};

