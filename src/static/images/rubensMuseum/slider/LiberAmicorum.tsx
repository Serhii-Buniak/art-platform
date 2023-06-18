import ImageWithoutSrc from "../..";

interface LiberAmicorumProps extends ImageWithoutSrc {

}

export const liberAmicorumPublicUrl = '/images/rubensMuseum/slider/liber-amicorum.jpg'


const LiberAmicorum: React.FC<LiberAmicorumProps> = (props) => {
    return (
        <img {...props} src={liberAmicorumPublicUrl} alt="liber-amicorum" />
    )
}

export default LiberAmicorum