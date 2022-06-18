import React from 'react';

import ExampleFooter from './example-footer';
import StarwarsRenderData from '../../components/starwars-render-data/starwars-render-data';
import StarwarsDetail from '../../components/starwars-detail/starwars-detail';
import noImage from '../../resources/images/no-images/Star_Wars_Logo.png';

const characterData = {
  "height": "172",
	"mass": "77",
	"hair color": "blond",
	"skin color": "fair",
	"eye color": "blue",
	"birth year": "19BBY",
	"gender": "male",
}

const exampleCard = {
  id: 1,
  type: 'starship',
  title: 'Example Card',
  image: noImage,
  favorite: true,
};

export default {
  title: 'Molecules/Starwars detail',
  component: StarwarsDetail,
  argTypes: {
    changeFavorite: { action: 'onFavoriteChange' }
  }
}

const Template = (args) => <StarwarsDetail {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  type: 'character',
  mainTitle: 'Character 1',
  mainImage: noImage,
  mainData: (<StarwarsRenderData data={characterData} />),
  favorite: false,
  footerLeftTitle: 'Example left footer',
  footerRightTitle: 'Example right footer',
  footerLeft: (<ExampleFooter cardData={exampleCard}/>),
  footerRight: (<ExampleFooter cardData={exampleCard}/>),
}

export const OneFooter = Template.bind({});
OneFooter.args = {
  id: 1,
  type: 'character',
  mainTitle: 'Character 1',
  mainImage: noImage,
  mainData: (<StarwarsRenderData data={characterData} />),
  favorite: false,
  footerLeftTitle: 'Example left footer',
  footerLeft: (<ExampleFooter cardData={exampleCard}/>),
};

export const NoFooter = Template.bind({});
NoFooter.args = {
  id: 1,
  type: 'character',
  mainTitle: 'Character 1',
  mainImage: noImage,
  mainData: (<StarwarsRenderData data={characterData} />),
  favorite: false,
};
