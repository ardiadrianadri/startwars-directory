import StarwarsLoadingScreen from "../../components/starwars-loading-screen/starwars-loading-screen";

function ExampleLoadingScreen({show}) {
  return (
    <>
      <StarwarsLoadingScreen showLoading={show}/>
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
  );
}

export default ExampleLoadingScreen;
