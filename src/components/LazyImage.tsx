import { useEffect, useState } from "react";

interface ImageProps {
    className: string,
    src: string
}

export const LazyImage: React.FC<ImageProps> = ({src, className}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = src;
        image.className = className;
        image.onload = () => setImageLoaded(true);
    }, []);

    if (!imageLoaded) {
        var image = new Image();
        image.src = src;

        return (
            <svg width={image.width} height={image.height}>
                <rect width={image.width} height={image.height} color={"black"}/>
            </svg>
        );
    }

    return (<img src={src} className={className}/>);
}