import StarwarsButton from '../../components/starwars-button/starwars-button';

function ExampleStarwarsButton ({size, color, disabled}) {
  return (
    <StarwarsButton size={size} color={color} disabled={disabled}>
      <button type='button' disabled={disabled}>Example button</button>
    </StarwarsButton>
  );
}

export default ExampleStarwarsButton;
