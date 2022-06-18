import React from 'react';

import StarwarsSmallCard from '../../components/starwars-small-card/starwars-small-card';
import noImage from '../../resources/images/no-images/Star_Wars_Logo.png';

export default {
  title: 'Molecules/Starwars small card',
  component: StarwarsSmallCard,
  argTypes: {
    selected: { action: 'onClick' },
    changeFavorite: { action: 'onClickStar' },
  }
}

const Template = (args) => <StarwarsSmallCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  title: 'Card example',
  type: 'character',
  image: noImage,
  favorite: false
};