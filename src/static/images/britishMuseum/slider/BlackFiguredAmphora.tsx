import ImageWithoutSrc from "../.."


interface BlackFiguredAmphoraProps extends ImageWithoutSrc {

}

export const blackFiguredAmphoraPublicUrl = '/images/britishMuseum/slider/black-figured-amphora.jpg'

const BlackFiguredAmphora: React.FC<BlackFiguredAmphoraProps> = (props) => {
    return (
        <img src={blackFiguredAmphoraPublicUrl} alt="black-figured-amphora" {...props} />
    )
}

export default BlackFiguredAmphora