import './example-modal-screen.css';

import StarwarsModalScreen from '../../components/starwars-modal-screen/starwars-modal-screen';

function ExampleModalScreen({showModal}) {
  return(
    <>
      <StarwarsModalScreen show={showModal}>
        <div className='inner-modal'>
          Merchandise Morty, your only purpose in life is to buy and 
          consume merchandise and you did it, you went into a store an actual 
          honest to god store and you bought something, you didn't ask questions 
          or raise ethical complaints you just looked into the bleeding jaws of 
          capitalism and said 'yes daddy please' and I'm so proud of you, I only 
          wish you could have bought more, I love buying things so much Morty. 
          Ohh, fuck! Why'd you even rope me into this?! Yeah, well, tough titties.
        </div>
      </StarwarsModalScreen>
      <div className="out-modal">
        Dont mind those stare goblins. Right, Crocubot. So, you're half cold unfeeling reptile, 
        half also cold equally unfeeling machine? I don't get it, and I don't need to. Want to piss on him?

        It takes, like, 78 years to hang a dragon to death. Did you just come into the cafeteria through a portal? 
        Ohh, fuck! Aw, c'mon Rick. That doesn't seem so bad.

        This isn't Game of Thrones, Morty. This aftershave made women want me, but it also made me impotent! Who cares, 
        Morty? Global acts of terrorism happen every day. Uh, here's something that's never happened before—I'm a pickle! 
        I'm Pickle Ri-i-i-ick! Nothing to read into there!

        That just sounds like slavery with extra steps. Your special time is your power. It makes you strong like a boob. Lick, 
        lickity, lick my balls! I don't get it and I don't need to.<br/>
      </div>
    </>
  )
}

export default ExampleModalScreen;