import ImageWithoutSrc from "../.."

interface LewisChessmenProps extends ImageWithoutSrc {

}

export const lewisChessmenPublicUrl = '/images/britishMuseum/visualCards/lewis-chessmen.jpg'

const LewisChessmen: React.FC<LewisChessmenProps> = (props) => {
    return (
        <img src={lewisChessmenPublicUrl} alt="lewis-chessmen" {...props} />
    )
}

export default LewisChessmen