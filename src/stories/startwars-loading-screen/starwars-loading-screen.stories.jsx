import ExampleLoadingScreen from "./example-loading-screen";

export default {
  title: "Molecules/Starwars loading screen",
  component: ExampleLoadingScreen
}

const Template = (args) => <ExampleLoadingScreen {...args} />;
export const Default = Template.bind({});
Default.args = {
  show: false
}