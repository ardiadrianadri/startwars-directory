import React from 'react';

import StarwarsPaginationBar from '../../components/starwars-pagination-bar/starwars-pagination-bar';

export default {
  title: 'Atoms/Starwars pagination bar',
  component: StarwarsPaginationBar,
  argTypes: {
    goNext: { action: 'navigateToNextPage' },
    goPrev: { action: 'navigateToPreviousPage'}
  }
};

const Template = (args) => <StarwarsPaginationBar {...args} />;
export const Default = Template.bind({});
Default.args = {
  isThereNextPage: true,
  isTherePrevPage: true
};
