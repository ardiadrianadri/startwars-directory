import ExampleModalScreen from "./example-modal-screen";

export default {
  title: "Atoms/Starwars modal screen",
  component: ExampleModalScreen
}

const Template = (args) => <ExampleModalScreen {...args} />;
export const Default = Template.bind({});
Default.args = {
  showModal: false
}