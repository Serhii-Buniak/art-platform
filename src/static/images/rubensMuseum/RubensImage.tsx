import ImageWithoutSrc from ".."

interface RubensImageProps extends ImageWithoutSrc {
}

export const rubensImagePublicUrl = '/images/rubensMuseum/rubens.jpg'

const RubensImage: React.FC<RubensImageProps> = (props) => {
    return (
        <img {...props} src={rubensImagePublicUrl} alt="rubens" />
    )
}

export default RubensImage
