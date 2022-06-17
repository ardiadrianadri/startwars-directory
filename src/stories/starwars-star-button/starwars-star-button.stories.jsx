import React from 'react';

import StarwarsStarButton from '../../components/starwars-star-button/starwars-star-button';

export default {
  title: 'Atoms/Starwars star button',
  component: StarwarsStarButton,
  argTypes: {
    clickStar: { action: 'onClick' },
  }
}

const Template = (args) => <StarwarsStarButton {...args} />;
export const Default = Template.bind({});
Default.args = {
  active: false
}