import styles from './YouTubeVideo.module.scss';

interface YouTubeVideoProps {
    src: string
};

export const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ src }) => {
    return (
            <div className={styles.container}>
                <iframe
                    src={src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </iframe>
            </div>
    );
}