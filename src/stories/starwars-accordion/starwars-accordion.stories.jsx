import React from 'react';

import ExampleAccordion from './example-accordion';
export default {
  title: 'Atoms/Starwars accordion',
  component: ExampleAccordion,
  argTypes: {
    changeState: { action: 'onClick' }
  }
}

const Template = (args) => <ExampleAccordion {...args} />;
export const Default = Template.bind({});
Default.args = {
  title: 'Example Accordion',
  state: ''
};