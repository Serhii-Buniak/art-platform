import { activiteAvecMediateurPublicUrl as activiteAvecMediateurPublicUrl } from "../../../static/images/louvre/ActiviteAvecMediateur"
import { activiteScolairesPublicUrl } from "../../../static/images/louvre/ActiviteScolaires"
import { groupeSanteHandicapPublicUrl } from "../../../static/images/louvre/GroupeSanteHandicap"
import { journeeClassePublicUrl } from "../../../static/images/louvre/JourneeClasse"
import { useVocabulary } from "../../../translation/vocabulary"
import VisualCardsContainer from "../VisualCardsContainer"


const LouvreCards: React.FC = () => {
    const voc = useVocabulary()

    return <VisualCardsContainer cards={[
        {
            link: "https://www.louvre.fr/visiter/venir-en-groupe/groupes-touristiques-et-de-loisirs",
            imageUrl: journeeClassePublicUrl,
            title: voc(p => p.touristGroupTitle),
            text: voc(p => p.touristGroupText)
        },
        {
            link: "https://www.louvre.fr/visiter/venir-en-groupe/groupes-scolaires-et-periscolaires",
            imageUrl: activiteAvecMediateurPublicUrl,
            title: voc(p => p.schoolGroupTitle),
            text: voc(p => p.schoolGroupText)
        },
        {
            link: "https://www.louvre.fr/visiter/venir-en-groupe/groupes-du-champ-social",
            imageUrl: activiteScolairesPublicUrl,
            title: voc(p => p.socialGroupTitle),
            text: voc(p => p.socialGroupText)
        },
        {
            link: "https://www.louvre.fr/visiter/venir-en-groupe/groupes-de-la-sante-et-du-handicapF",
            imageUrl: groupeSanteHandicapPublicUrl,
            title: voc(p => p.healthGroupTitle),
            text: voc(p => p.healthGroupText)
        },
    ]} />
}


export default LouvreCards