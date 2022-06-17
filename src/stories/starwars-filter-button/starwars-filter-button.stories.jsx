import React from 'react';

import StarwarsFilterButton from '../../components/starwars-filter-button/starwars-filter-button';
import starActiveIcon from '../../resources/icons/Star-active.svg';

export default {
  title: 'Atoms/Starwars filter button',
  component: StarwarsFilterButton,
  argTypes: {
    changeState: { action: 'onClick' },
  }
}

const Template = (args) => <StarwarsFilterButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  active: '',
  title: 'Filter action'
}

export const withImage = Template.bind({});
withImage.args = {
  title: 'With an image',
  image: starActiveIcon,
  active: '',
};