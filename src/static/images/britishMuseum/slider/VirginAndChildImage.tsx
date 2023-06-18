import ImageWithoutSrc from "../.."


interface VirginAndChildImageProps extends ImageWithoutSrc {

}

export const virginAndChildImagePublicUrl = '/images/britishMuseum/slider/virgin-and-child.jpg'

const VirginAndChildImage: React.FC<VirginAndChildImageProps> = (props) => {
    return (
        <img src={virginAndChildImagePublicUrl} alt="british-museum-greeting" {...props} />
    )
}

export default VirginAndChildImage