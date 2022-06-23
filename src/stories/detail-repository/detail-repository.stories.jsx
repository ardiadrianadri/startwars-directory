import React from 'react';

import ExampleDetailRepository from './example-detail-repository';

export default {
  title: 'Repositories/Details',
  component: ExampleDetailRepository
};

const Template = (args) => <ExampleDetailRepository {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '',
  type: '',
}