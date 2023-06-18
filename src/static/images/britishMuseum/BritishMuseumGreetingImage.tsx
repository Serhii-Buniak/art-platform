import ImageWithoutSrc from "..";

interface BritishMuseumGreetingImageProps extends ImageWithoutSrc {

}

export const britishMuseumGreetingImagePublicUrl = '/images/britishMuseum/british-museum-greeting.jpg'

const BritishMuseumGreetingImage: React.FC<BritishMuseumGreetingImageProps> = (props) => {
    return (
        <img src={britishMuseumGreetingImagePublicUrl} alt="british-museum-greeting" {...props} />
    )
}

export default BritishMuseumGreetingImage