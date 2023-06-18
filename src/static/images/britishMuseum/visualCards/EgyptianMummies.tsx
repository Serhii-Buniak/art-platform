import ImageWithoutSrc from "../.."

interface EgyptianMummiesProps extends ImageWithoutSrc {

}

export const egyptianMummiesPropsImagePublicUrl = '/images/britishMuseum/visualCards/egyptian-mummies.jpg'

const EgyptianMummies: React.FC<EgyptianMummiesProps> = (props) => {
    return (
        <img src={egyptianMummiesPropsImagePublicUrl} alt="egyptian-mummies" {...props} />
    )
}

export default EgyptianMummies