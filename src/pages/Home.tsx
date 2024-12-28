import { About, Contact, Gigs, Music, Videos, Photos } from '../sections';

export const Home: React.FC = () => {
    return (
        <>
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