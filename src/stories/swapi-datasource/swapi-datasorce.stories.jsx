import React from 'react';

import ExampleSwapiDataSource from './example-swapi-datasource';

export default {
  title: 'Data Source/Swapi data source',
  component: ExampleSwapiDataSource
}

const Template = (args) => <ExampleSwapiDataSource {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'characters',
  filter: '',
  id: '1'
};