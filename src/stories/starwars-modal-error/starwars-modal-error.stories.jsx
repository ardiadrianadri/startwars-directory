import React from "react";

import ExampleModalError from "./example-modal-error";

export default {
  title: 'Molecules/Starwars modal error',
  component: ExampleModalError,
  argTypes: {
    closeModal: { action: 'onCloseModal' }
  }
}

const Template = args => <ExampleModalError {...args} />;

export const Default = Template.bind({});
Default.args = {
  show: false,
  title: 'Example error modal',
  message: `
    During the last operation, something went really wrong.
    We don't know exactly what went wrong, but we hope to 
    know it in the next months.
  `
};