import ImageWithoutSrc from "../..";

interface SalleDeMediationDesArtsGraphiquesProps extends ImageWithoutSrc {

}

export const salleDeMediationDesArtsGraphiquesPublicUrl = '/images/louvre/slider/salle-de-mediation-des-arts-graphiques.webp'


const SalleDeMediationDesArtsGraphiques: React.FC<SalleDeMediationDesArtsGraphiquesProps> = (props) => {
    return (
        <img src={salleDeMediationDesArtsGraphiquesPublicUrl} alt="salle-de-mediation-des-arts-graphiques" {...props} />
    )
}

export default SalleDeMediationDesArtsGraphiques