/* eslint-disable react-hooks/exhaustive-deps */
import './starwars-accordion.css';
import { useEffect } from 'react';

import { animated, useSpring } from 'react-spring';

import triangleAccordion from '../../resources/icons/triangle.svg';
import { ACCORDION_STATES } from './starwars-accordion-states';


function StarwarsAccordion ({title, state, changeState, children}) {
  const [stylesButton, apiButton] = useSpring(() => ({ transform: 'rotate(0deg)' }));
  const [stylesBody, apiBody] = useSpring(() => ({ opacity: 0 }));

  useEffect(() => {
    if (state === ACCORDION_STATES.OPEN) {
      apiButton.start({ transform: 'rotate(90deg)' });
      apiBody.start({ opacity: 1 });
    } else if (state === ACCORDION_STATES.CLOSE) {
      apiButton.start({ transform: 'rotate(0deg)' });
      apiBody.start({ opacity: 0 });
    }
  }, [state]);

  return (
    <div className="accordion_container">
      <div className="accordion_header">
        <button className="accordion_header_button" onClick={changeState}>
          <animated.img
            style={stylesButton}
            src={triangleAccordion}
            alt="open close accordion"
            className="accordion_header_button_img"
          />
        </button>
        <div className="accordion_header_title">{title}</div>
      </div>
      <animated.div style={stylesBody} className="accordion_body">
          {children}
      </animated.div>
    </div>
  );
}

export default StarwarsAccordion;