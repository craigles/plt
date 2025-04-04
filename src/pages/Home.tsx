import { About, Contact, Gigs, Music, Videos, Photos, Splash } from '../sections';

export const Home: React.FC = () => {
    return (
        <>
            <Splash />
            <hr />
            <Music />
            <hr />
            <Videos />
            <hr />
            <Gigs />
            <hr />
            <Photos />
            <hr />
            <About />
            <hr />
            <Contact />
        </>
    )
}