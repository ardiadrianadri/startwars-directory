import React from 'react';

import StartwarsSearchForm from '../../components/starwars-search-form/starwars-search-form';

export default {
  title: 'Molecules/Starwars Search Form',
  component: StartwarsSearchForm,
  argTypes: {
    submitEvent: { action: 'onSubmit' }
  }
}

const Template = (args) => <StartwarsSearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  searchValue: 'Previous search value',
  filters: {
    characters: false,
    starships: false,
    planets: false,
    favorites: false
  }
};

export const someFiltersActivated = Template.bind({});
someFiltersActivated.args = {
  searchValue: 'Previous search value',
  filters: {
    characters: true,
    starships: false,
    planets: true,
    favorites: false
  }
}