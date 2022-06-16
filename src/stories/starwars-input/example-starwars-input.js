import StarwarsInput from "../../components/starwars-input/starwars-input";

function ExampleStarwarsInput({label}) {
  return (
    <StarwarsInput label={label}>
      <input type="text"/>
    </StarwarsInput>
  );
}

export default ExampleStarwarsInput;