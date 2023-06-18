import ImageWithoutSrc from "../.."


interface LoutrophorosProps extends ImageWithoutSrc {

}

export const loutrophorosPublicUrl = '/images/britishMuseum/slider/loutrophoros.jpg'

const Loutrophoros: React.FC<LoutrophorosProps> = (props) => {
    return (
        <img src={loutrophorosPublicUrl} alt="loutrophoros" {...props} />
    )
}

export default Loutrophoros