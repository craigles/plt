interface YouTubeVideoProps {
    src: string
};

export const YouTubeVideo: React.FC<YouTubeVideoProps> = (props) => {
    return (
        <iframe
            width="560"
            height="315"
            src={props.src}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen>
        </iframe>
    );
}