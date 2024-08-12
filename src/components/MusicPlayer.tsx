import AudioPlayer, { PlayList } from 'react-modern-audio-player';
import styles from './MusicPlayer.module.scss';

export const MusicPlayer: React.FC = () => {

    const playList: PlayList = [
        {
            name: 'Day and Age',
            img: "./images/albums/Kitchen Sink Drama.jpg",
            src: './audio/Day and Age.mp3',
            id: 1,
        },
        {
            name: 'Carry a Gun',
            img: "./images/albums/Kitchen Sink Drama.jpg",
            src: './audio/Carry a Gun.mp3',
            id: 2,
        },
        {
            name: 'Don\'t Hold Back',
            img: "./images/albums/Kitchen Sink Drama.jpg",
            src: './audio/Dont Hold Back.mp3',
            id: 3,
        },
        {
            name: 'Entertaining the Thought (of Leaving You)',
            img: "./images/albums/Kitchen Sink Drama.jpg",
            src: './audio/Entertaining the Thought (of Leaving You).mp3',
            id: 4,
        },
        {
            name: 'Push Your Heart',
            img: "./images/albums/Push Your Heart.jpg",
            src: './audio/Push Your Heart.mp3',
            id: 5,
        },
    ];

    return (
        <div className={styles.audioplayer}>
            <AudioPlayer
                rootContainerProps={{
                    colorScheme: "dark",
                }}
                playList={playList}
                activeUI={{
                    playButton: true,
                    playList: "unSortable",
                    prevNnext: true,
                    volume: true,
                    volumeSlider: true,
                    repeatType: false,
                    trackTime: false,
                    trackInfo: true,
                    artwork: false,
                    progress: "bar"
                }}
                placement={{
                    player: "bottom",
                    playList: "top"
                }}
            />
            
        </div>
    );
}