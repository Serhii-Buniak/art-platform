import ImageWithoutSrc from ".."

interface RubensMuseumGreetingProps extends ImageWithoutSrc {
}

export const rubensMuseumGreetingPublicUrl = '/images/rubensMuseum/rubens-museum-greeting.jpg'


const RubensMuseumGreetingImage: React.FC<RubensMuseumGreetingProps> = (props) => {
    return (
        <img {...props} src={rubensMuseumGreetingPublicUrl} alt="rubens-museum-greeting" />
    )
}

export default RubensMuseumGreetingImage
