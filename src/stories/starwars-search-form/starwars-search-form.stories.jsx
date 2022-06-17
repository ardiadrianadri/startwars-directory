import React from 'react';

import StartwarsSearchForm from '../../components/starwars-search-form/starwars-search-form';

export default {
  title: 'Molecule/Starwars Search Form',
  component: StartwarsSearchForm,
  argTypes: {
    submitEvent: { action: 'onSubmit' }
  }
}

const Template = (args) => <StartwarsSearchForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  searchValue: 'Previous search value',
};