import ImageGallery from "react-image-gallery";

const photos = [
    { original: "images/photos/DSC_2457.JPG" },
    { original: "images/photos/DSC_2553.JPG" },
    { original: "images/photos/DSC_2613.JPG" },
    { original: "images/photos/DSC_2687.JPG" },
];

export const Photos: React.FC = () => {
    return (
        <div className="photos">
            <ImageGallery 
                items={photos}
                showPlayButton={false}
                showFullscreenButton={false}
                slideInterval={10000}
                autoPlay={true}
                showNav={true}

            />
        </div>
    );
}