import './starwars-input.css';

function StarwarsInput({label, children}) {
  return (
    <div className="input_container">
      <label className="input_label">{label}</label>
      {children}
    </div>
  )
}

export default StarwarsInput;
