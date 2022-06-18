import React from 'react';

import StarwarsFiltersControl from '../../components/starwars-filters-control/starwars-filters-control';
import starActiveIcon from '../../resources/icons/Star-active.svg';

export default {
  title: 'Molecules/Starwars filters control',
  component: StarwarsFiltersControl,
  argTypes: {
    filtersChange: { action: 'onClickFilter' }
  }
}

const Template = (args) => <StarwarsFiltersControl {...args} />;
export const Default = Template.bind({});
Default.args = {
  filters: {
    characters: {
      title: 'Characters',
      active: null,
    },
    starships: {
      title: 'Starships',
      active: null,
    },
    planets: {
      title: 'Planets',
      active: null,
    },
    favorites: {
      title: 'Favorites',
      active: null,
      image: starActiveIcon
    }
  }
}