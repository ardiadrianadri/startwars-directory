import './starwars-button.css';

function StarwarsButton({size, color, disabled, children}) {
  return (
    <span className={`button_container ${size} ${color} ${disabled ? 'disabled' : ''}`}>
      {children}
    </span>
  );
}

export default StarwarsButton;