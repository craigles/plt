import AudioPlayer, { PlayList } from 'react-modern-audio-player';
import styles from './MusicPlayer.module.scss';

export const MusicPlayer: React.FC = () => {

    const playList: PlayList = [
        {
            name: 'Day and Age',
            img: "./plt/images/albums/Kitchen Sink Drama.jpg",
            src: './plt/audio/Day and Age.mp3',
            id: 1,
        },
        {
            name: 'Carry a Gun',
            img: "./plt/images/albums/Kitchen Sink Drama.jpg",
            src: './plt/audio/Carry a Gun.mp3',
            id: 2,
        },
        {
            name: 'Don\'t Hold Back',
            img: "./plt/images/albums/Kitchen Sink Drama.jpg",
            src: './plt/audio/Dont Hold Back.mp3',
            id: 3,
        },
        {
            name: 'Entertaining the Thought (of Leaving You)',
            img: "./plt/images/albums/Kitchen Sink Drama.jpg",
            src: './plt/audio/Entertaining the Thought (of Leaving You).mp3',
            id: 4,
        },
        {
            name: 'Push Your Heart',
            img: "./plt/images/albums/Push Your Heart.jpg",
            src: './plt/audio/Push Your Heart.mp3',
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
                    artwork: true,
                    progress: "bar"
                }}
                placement={{
                    player: "bottom",
                    interface: {
                        itemCustomArea: {
                            artwork: "row1-1",
                            trackInfo: "row1-1",
                            playButton: "row1-2",
                            progress: "row1-5",
                            volume: "row1-8",
                            playList: "row1-9",
                        }
                    },
                    playList: "top",

                }}
            />
            
        </div>
    );
}