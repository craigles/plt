import styles from './Music.module.scss';

export const Music: React.FC = () => {
    return (
        <div className={styles.music}>
            <h1><a id="music" href="/#"></a>Music</h1>
                <iframe style={{ "border": 0, "width": "350px", "height": "350px" }} src="https://bandcamp.com/EmbeddedPlayer/album=1706571441/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://prelovedthings.bandcamp.com/album/how-life-strange-is">How Life Strange Is by Preloved Things</a></iframe>

                <iframe style={{ "border": 0, "width": "350px", "height": "350px" }} src="https://bandcamp.com/EmbeddedPlayer/album=1355514861/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://prelovedthings.bandcamp.com/album/kitchen-sink-drama">Kitchen Sink Drama by Preloved Things</a></iframe>
        </div>
    );
}