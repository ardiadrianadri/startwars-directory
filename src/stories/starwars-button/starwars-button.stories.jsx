import React from 'react';

import ExampleStarwarsButton from './example-starwars-button';

export default {
  title: 'Atoms/Starwars Button',
  component: ExampleStarwarsButton
}

const Template = (args) => <ExampleStarwarsButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'large',
  color: 'primary',
  disabled: false
}