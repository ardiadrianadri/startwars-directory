import './starwars-accordion.css';

import triangleAccordion from '../../resources/icons/triangle.svg';


function StarwarsAccordion ({title, state, changeState, children}) {
  return (
    <div className="accordion_container">
      <div className="accordion_header">
        <button className="accordion_header_button" onClick={changeState}>
          <img
            src={triangleAccordion}
            alt="open close accordion"
            className={`accordion_header_button_img ${state}`}
          />
        </button>
        <div className="accordion_header_title">{title}</div>
      </div>
      <div className={`accordion_body ${state}`}>
        {children}
      </div>
    </div>
  );
}

export default StarwarsAccordion;