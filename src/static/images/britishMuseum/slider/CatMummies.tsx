import ImageWithoutSrc from "../.."


interface CatMummiesProps extends ImageWithoutSrc {

}

export const catMummiesPublicUrl = '/images/britishMuseum/slider/cat-mummies.jpg'

const CatMummies: React.FC<CatMummiesProps> = (props) => {
    return (
        <img src={catMummiesPublicUrl} alt="cat-mummies" {...props} />
    )
}

export default CatMummies