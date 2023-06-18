import ImageWithoutSrc from "../..";

interface EscalierDaruVictoireDeSamothraceProps extends ImageWithoutSrc {

}

export const escalierDaruVictoireDeSamothracePublicUrl = '/images/louvre/slider/escalier-daru-victoire-de-samothrace.webp'


const EscalierDaruVictoireDeSamothrace: React.FC<EscalierDaruVictoireDeSamothraceProps> = (props) => {
    return (
        <img src={escalierDaruVictoireDeSamothracePublicUrl} alt="escalier-daru-victoire-de-samothrace" {...props} />
    )
}

export default EscalierDaruVictoireDeSamothrace