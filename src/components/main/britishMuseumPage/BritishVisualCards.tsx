import { egyptianMummiesPropsImagePublicUrl } from "../../../static/images/britishMuseum/visualCards/EgyptianMummies"
import { lewisChessmenPublicUrl } from "../../../static/images/britishMuseum/visualCards/LewisChessmen"
import { membersEveningPublicUrl } from "../../../static/images/britishMuseum/visualCards/MembersEvening"
import { pukaraSpinifexPublicUrl } from "../../../static/images/britishMuseum/visualCards/PukaraSpinifex"
import { useVocabulary } from "../../../translation/vocabulary"
import VisualCardsContainer from "../VisualCardsContainer"

const BritishVisualCards: React.FC = () => {
    const voc = useVocabulary()

    return <VisualCardsContainer cards={[
        {
            imageUrl: egyptianMummiesPropsImagePublicUrl,
            title: voc(p => p.visitBritishMuseumTitle),
            text: voc(p => p.visitBritishMuseumText),
            link: "https://www.britishmuseum.org/visit"
        },
        {
            imageUrl: lewisChessmenPublicUrl,
            title: voc(p => p.galleriesMuseumTitle),
            text: voc(p => p.galleriesMuseumText),
            link: "https://www.britishmuseum.org/collection/galleries"
        },
        {
            imageUrl: pukaraSpinifexPublicUrl,
            title: voc(p => p.objectTrailsMuseumTitle),
            text: voc(p => p.objectTrailsMuseumText),
            link: "https://www.britishmuseum.org/visit/object-trails"
        },
        {
            imageUrl: membersEveningPublicUrl,
            title: voc(p => p.membershipMuseumTitle),
            text: voc(p => p.membershipMuseumText),
            link: "https://www.britishmuseum.org/membership"
        },
    ]} />
}

export default BritishVisualCards