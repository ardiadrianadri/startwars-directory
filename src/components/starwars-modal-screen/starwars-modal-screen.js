import './starwars-modal-screen.css';

function StarwarsModalScreen({show, children}) {
  return (
    <div className={`modal-screen_container ${show ? 'show' : ''}`}>
      {children}
    </div>
  );
}

export default StarwarsModalScreen;