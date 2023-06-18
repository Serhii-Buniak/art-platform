import ImageWithoutSrc from ".."

interface MuseumImageProps extends ImageWithoutSrc {
}

const MuseumImage: React.FC<MuseumImageProps> = (props) => {
    return (
        <img {...props} src="/images/main/museum.jpeg" alt="museum" />
    )
}

export default MuseumImage
