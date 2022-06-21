import React from 'react';

import StarwarsResultsGrid from '../../components/starwars-results-grid/starwars-results-grid';
import noImage from '../../resources/images/no-images/Star_Wars_Logo.png';

export default {
  title: 'Molecules/Starwars results grid',
  component: StarwarsResultsGrid,
  argTypes: {
    elementSelected: { action: 'onElementSelected' },
    elementFavorite: { action: 'onElementFavorite' },
  }
}

const Template = (args) => <StarwarsResultsGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  showTitles: true,
  accordionTitle: 'Storybook example',
  dataList: [
    {
      id: 1,
      type: 'character',
      title: 'Character 1',
      image: noImage,
      favorite: false
    }, {
      id: 1,
      type: 'planet',
      title: 'Planet 1',
      image: noImage,
      favorite: false
    }, {
      id: 1,
      type: 'starship',
      title: 'Starship 1',
      image: noImage,
      favorite: false
    }, {
      id: 2,
      type: 'character',
      title: 'Character 2',
      image: noImage,
      favorite: false
    }, {
      id: 2,
      type: 'planet',
      title: 'Planet 2',
      image: noImage,
      favorite: false
    }, {
      id: 2,
      type: 'starship',
      title: 'Starship 2',
      image: noImage,
      favorite: false
    }, {
      id: 3,
      type: 'character',
      title: 'Character 3',
      image: noImage,
      favorite: false
    }, {
      id: 3,
      type: 'planet',
      title: 'Planet 3',
      image: noImage,
      favorite: false
    }, {
      id: 3,
      type: 'starship',
      title: 'Starship 3',
      image: noImage,
      favorite: false
    }, {
      id: 4,
      type: 'character',
      title: 'Character 4',
      image: noImage,
      favorite: false
    }
  ]
}

export const noResults = Template.bind({})
noResults.args = {
  showTitles: true,
  accordionTitle: 'Storybook example',
  dataList: []
}