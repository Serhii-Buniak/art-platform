import ImageWithoutSrc from ".."

interface ArtGalleryImageProps extends ImageWithoutSrc {
}

const ArtGalleryImage: React.FC<ArtGalleryImageProps> = (props) => {
    return (
        <img {...props} src="/images/main/art-gallery.jpg" alt="art-gallery" />
    )
}

export default ArtGalleryImage
