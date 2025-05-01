import styles from './About.module.scss';

export const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <h1><a id="about" href="/#"></a>About</h1>
            <p>Preloved Things were regurgitated from the very bottom of the rabbit hole. They are dynamical, maniacal, poetical, a little political. This art-rock group from Brisbane play meticulously constructed songs that charm, challenge and confound.</p> 
            <p>In 2018 they released their debut EP <i>Kitchen Sink Drama</i>. They won best music video at the West End Film Festival that year for their song <i>Entertaining the Thought (of Leaving You)</i>.</p>
            <p>Their live shows are like an organism that became sentient after lightning struck a bar fight and a philosophy lecture at the same time. Rumor has it, Preloved Things have the power to temporarily interrupt the iPhone co-dependence of jaded millennials and Gen Z'ers. No mean feat.</p>
            <p><i>"I would hurdle the fiery sinkholes to hell, to see this art-rock chef-d'oeuvre played live."</i> - Brisbane Indie Gems</p>
        </div>
    );
}