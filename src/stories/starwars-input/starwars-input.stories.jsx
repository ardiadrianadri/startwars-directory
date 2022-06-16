import React from 'react';

import ExampleStarwarsInput from './example-starwars-input';

export default {
  title: 'Atoms/Starwars Input',
  component: ExampleStarwarsInput
}

const Template = (args) => <ExampleStarwarsInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Example input'
}