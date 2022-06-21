import StarwarsAccordion from '../../components/starwars-accordion/starwars-accodion';

function ExampleAccordion ({title, state, changeState}) {
  return (
    <StarwarsAccordion title={title} state={state} changeState={changeState}>
      <div className="accordion_content">
        You don't know me! Wow I really crononberg'd up the whole place huh Morty,
        just a bunch a cronenbergs walkin around. Yea and I made the stars that
        became the carbon in your mothers ovaries! No! Look away! I'm making an
        egg, Mom! Ugh…! I'm making an egg!

        What, you think I'd waste our home teaching you a fucking lesson? I am 
        gonna miss this place, though: Johnny Carson's still alive and on the air, 
        9/11 never happened, and Rocky Road ice cream has peanut butter and jelly 
        instead of marshmallows. Don't be trippin dog we got you. I couldn't hear 
        you over my own screaming. We've talked about this! Haha god-damn!
      </div>
    </StarwarsAccordion>
  );
} 

export default ExampleAccordion;