import styles from './About.module.scss';

export const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <h1><a id="about" href="/#"></a>About</h1>
            <p>Preloved Things were regurgitated from the very bottom of the rabbit hole. They sound like a dream-tornado obliterated the local 7-11 and showered your neighbourhood in candy. While you sunbathe on the grassy knoll, they are the lone hailstone which strikes upon your nuts.</p> 
            <p>Preloved Things are dynamical, maniacal, poetical, a little political. Brittle Guitar breaks and confounding arrangements. Furious psychedelica yet moments of wafer thin subtlety. Drumming like a cat fight in a china cabinet. Lyrics like sublime  trickery.</p>
            <p>The band emerged from the culturally sterile Brisbane suburbs and have only recently made first contact with the outside world. Scientists are studying their sound to see what medicinal properties it may contain and if it could be leveraged profitably on the open market.</p>
            <p>Songs titles like <i>The Cats Are Building Mouse Holes</i> and <i>Reset the Internet</i> or <i>K8lyn (with an 8 in it)</i> foreshadow some serious lyrical clout.  </p>
            <p>Their live show is like an organism that became sentient when lightning struck a bar fight and a philosophy lecture at the same time. Preloved Things can temporarily interrupt the iPhone codependence of jaded millennials in the audience.</p>
            <p>With their debut long player <i>How Life Strange Is</i> dropping on wax in 2025, Preloved Things are poised to do more and bigger and beautifuller.</p>
        </div>
    );
}