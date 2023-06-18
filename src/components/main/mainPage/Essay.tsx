import { useTranslation } from "react-i18next"
import ArtGalleryImage from "../../../static/images/main/ArtGalleryImage"
import MuseumImage from "../../../static/images/main/MuseumImage"
import { useVocabulary } from "../../../translation/vocabulary"
import InformationCardsContainer from "../InformationCardsContainer"

const Essay: React.FC = () => {
    const voc = useVocabulary()

    return <InformationCardsContainer cards={[
        {
            image: <MuseumImage />,
            title: voc(p => p.museums),
            text: voc(p => p.essayMuseum),
        },
        {
            image: <ArtGalleryImage />,
            title: voc(p => p.artGalleries),
            text: voc(p => p.essayArtGallery),
        },
    ]} />
}

export default Essay