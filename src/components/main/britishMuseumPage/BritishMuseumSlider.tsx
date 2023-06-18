import { blackFiguredAmphoraPublicUrl } from "../../../static/images/britishMuseum/slider/BlackFiguredAmphora"
import { bonesOfMankindPublicUrl } from "../../../static/images/britishMuseum/slider/BonesOfMankind"
import { catMummiesPublicUrl } from "../../../static/images/britishMuseum/slider/CatMummies"
import { durerRhinoPublicUrl } from "../../../static/images/britishMuseum/slider/DurerRhino"
import { ladiesOfLlangollenPublicUrl } from "../../../static/images/britishMuseum/slider/LadiesOfLlangollen"
import { loutrophorosPublicUrl } from "../../../static/images/britishMuseum/slider/Loutrophoros"
import { virginAndChildImagePublicUrl } from "../../../static/images/britishMuseum/slider/VirginAndChildImage"
import { lewisChessmenPublicUrl } from "../../../static/images/britishMuseum/visualCards/LewisChessmen"
import { useVocabulary } from "../../../translation/vocabulary"
import SliderContainer from "../SliderContainer"

const BritishMuseumSlider: React.FC = () => {
    const voc = useVocabulary()

    return <SliderContainer sliders={
        [
            {
                imageUrl: virginAndChildImagePublicUrl,
                title: voc(p => p.virginAndChildTitle),
                text: voc(p => p.virginAndChildText),
            },
            {
                imageUrl: loutrophorosPublicUrl,
                title: voc(p => p.loutrophorosTitle),
                text: voc(p => p.loutrophorosText),
            },
            {
                imageUrl: bonesOfMankindPublicUrl,
                title: voc(p => p.bonesOfMankindTitle),
                text: voc(p => p.bonesOfMankindText),
            },
            {
                imageUrl: catMummiesPublicUrl,
                title: voc(p => p.bonesOfMankindTitle),
                text: voc(p => p.bonesOfMankindText),
            },
            {
                imageUrl: durerRhinoPublicUrl,
                title: voc(p => p.durerRhinoTitle),
                text: voc(p => p.durerRhinoText),
            },
            {
                imageUrl: ladiesOfLlangollenPublicUrl,
                title: voc(p => p.ladiesOfLlangollenTitle),
                text: voc(p => p.ladiesOfLlangollenText),
            },
            {
                imageUrl: lewisChessmenPublicUrl,
                title: voc(p => p.lewisChessmenTitle),
                text: voc(p => p.lewisChessmenText),
            },
            {
                imageUrl: blackFiguredAmphoraPublicUrl,
                title: voc(p => p.blackFiguredAmphoraTitle),
                text: voc(p => p.blackFiguredAmphoraText),
            },
        ]
    } />
}

export default BritishMuseumSlider