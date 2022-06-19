import React from 'react';

import ExampleResultRepository from './example-result-repository';

export default {
  title: 'Repositories/Results',
  component: ExampleResultRepository
}

const Template = (args) => <ExampleResultRepository {...args} />;

export const Default = Template.bind({});
Default.args = {
  filters: {
    characters: false,
    planets: false,
    starships: false,
    favorites: false,
  },
  search: '',
  favoriteType: '',
  favoriteId: '',
  pageUrl: '',
  pageType: '',
};