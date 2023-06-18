import ImageWithoutSrc from "../..";

interface ArchdukesAlbrechtAndIsabellaProps extends ImageWithoutSrc {

}

export const archdukesAlbrechtAndIsabellaPublicUrl = '/images/rubensMuseum/slider/archdukes-albrecht-and-isabella.jpg'


const ArchdukesAlbrechtAndIsabella: React.FC<ArchdukesAlbrechtAndIsabellaProps> = (props) => {
    return (
        <img {...props} src={archdukesAlbrechtAndIsabellaPublicUrl} alt="archdukes-albrecht-and-isabella" />
    )
}

export default ArchdukesAlbrechtAndIsabella