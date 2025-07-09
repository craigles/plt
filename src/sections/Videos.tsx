import { YouTubeVideo } from "../components/YouTubeVideo";

export const Videos: React.FC = () => {
    return (
        <div className="videos">
            <h1><a id="videos" href="/#"></a>Videos</h1>
            <YouTubeVideo src="https://www.youtube.com/embed/tYUdB7D0HIA?si=UuY1nSgoAbphd-QA" />
            <hr />
            <YouTubeVideo src="https://www.youtube.com/embed/dLys1Mm2yBY?si=67S8CX36ZU9dPBUj" />
            <hr />
            <YouTubeVideo src="https://www.youtube.com/embed/3upqlxFrSBE?si=EpBFL4AWkesE7mjZ" />
            <hr />
            <YouTubeVideo src="https://www.youtube.com/embed/kxSmbj-Bqe8?si=HUNItWttpNiGDGw6" />
        </div>
    );
}