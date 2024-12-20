import { LazyImage } from '../components/LazyImage';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <LazyImage src="/plt/images/background-2.jpg" className={styles.fade} />
            <div className={styles.overlayTop}>
                <LazyImage src="/plt/images/logo-2.png" className={styles.logo} />
            </div>
            <div className={styles.overlayBottom}>
                <nav>
                    <ul>
                        <li><a href="#music">Music</a></li>
                        <li><a href="#videos">Videos</a></li>
                        <li><a href="#gigs">Gigs</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li>
                            <a href="https://facebook.com/prelovedthings" title="Facebook">
                                <span className={`fa-brands fa-facebook fa-xl ${styles.icon}`}></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://prelovedthings.bandcamp.com" title="Bandcamp">
                                <span className={`fa-brands fa-bandcamp fa-xl ${styles.icon}`}></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/artist/7u5KGVUXmyqhbTMUQMFbng?si=avDNSO4jQqe-sG6g4Uil1w" title="Spotify">
                                <span className={`fa-brands fa-spotify fa-xl ${styles.icon}`}></span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}