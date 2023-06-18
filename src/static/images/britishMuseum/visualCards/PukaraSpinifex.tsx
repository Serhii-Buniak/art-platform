import ImageWithoutSrc from "../.."

interface PukaraSpinifexProps extends ImageWithoutSrc {

}

export const pukaraSpinifexPublicUrl = '/images/britishMuseum/visualCards/pukara-spinifex.jpg'

const PukaraSpinifex: React.FC<PukaraSpinifexProps> = (props) => {
    return (
        <img src={pukaraSpinifexPublicUrl} alt="pukara-spinifex" {...props} />
    )
}

export default PukaraSpinifex