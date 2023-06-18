import ImageWithoutSrc from "../..";

interface LaJocondeSalleDesEtatsProps extends ImageWithoutSrc {

}

export const laJocondeSalleDesEtatsPublicUrl = '/images/louvre/slider/la-joconde-salle-des-etats.webp'


const LaJocondeSalleDesEtats: React.FC<LaJocondeSalleDesEtatsProps> = (props) => {
    return (
        <img src={laJocondeSalleDesEtatsPublicUrl} alt="la-joconde-salle-des-etats" {...props} />
    )
}

export default LaJocondeSalleDesEtats