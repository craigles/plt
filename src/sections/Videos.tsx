import { YouTubeVideo } from "../components/YouTubeVideo";

export const Videos: React.FC = () => {
    return (
        <>
            <h1><a id="videos" href="/#"></a>Videos</h1>
            <div className="videos">
                <YouTubeVideo src="https://www.youtube.com/embed/dLys1Mm2yBY?si=67S8CX36ZU9dPBUj" />
                <hr />
                <YouTubeVideo src="https://www.youtube.com/embed/kxSmbj-Bqe8?si=HUNItWttpNiGDGw6" />
                <hr />
                <YouTubeVideo src="https://www.youtube.com/embed/WzBmMu9CKrc?si=4LLAfse1SvLxgR3v" />
            </div>
        </>
    );
}