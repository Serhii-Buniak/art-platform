import { archdukesAlbrechtAndIsabellaPublicUrl } from "../../../static/images/rubensMuseum/slider/ArchdukesAlbrechtAndIsabella"
import { ewerAndBasinPublicUrl } from "../../../static/images/rubensMuseum/slider/EwerAndBasin"
import { galleryOfCornelisPublicUrl } from "../../../static/images/rubensMuseum/slider/GalleryOfCornelis"
import { henry4AtTheBattleOfLvryPublicUrl } from "../../../static/images/rubensMuseum/slider/Henry4AtTheBattleOfLvry"
import { ladyAtTheFishmarketPublicUrl } from "../../../static/images/rubensMuseum/slider/LadyAtTheFishmarket"
import { liberAmicorumPublicUrl } from "../../../static/images/rubensMuseum/slider/LiberAmicorum"
import { neptuneAndAmphitritePublicUrl } from "../../../static/images/rubensMuseum/slider/NeptuneAndAmphitrite"
import { peasantDrinkingPublicUrl } from "../../../static/images/rubensMuseum/slider/PeasantDrinking"
import { stillLifePublicUrl } from "../../../static/images/rubensMuseum/slider/StillLife"
import { sundialPublicUrl } from "../../../static/images/rubensMuseum/slider/Sundial"
import { useVocabulary } from "../../../translation/vocabulary"
import SliderContainer from "../SliderContainer"


const RubensMuseumSlider: React.FC = () => {
    const voc = useVocabulary()

    return <SliderContainer sliders={
        [
            {
                imageUrl: ladyAtTheFishmarketPublicUrl,
                title: voc(p => p.ladyAtTheFishmarketTitle),
                text:  voc(p => p.ladyAtTheFishmarketText)
            },
            {
                imageUrl: henry4AtTheBattleOfLvryPublicUrl,
                title: voc(p => p.henry4BattleOfIvryTitle),
                text:  voc(p => p.henry4BattleOfIvryText)
            },
            {
                imageUrl: neptuneAndAmphitritePublicUrl,
                title: voc(p => p.neptuneAndAmphitriteTitle),
                text:  voc(p => p.neptuneAndAmphitriteText)
            },
            {
                imageUrl: galleryOfCornelisPublicUrl,
                title: voc(p => p.neptuneAndAmphitriteTitle),
                text:  voc(p => p.neptuneAndAmphitriteText)
            },
            {
                imageUrl: liberAmicorumPublicUrl,
                title: voc(p => p.neptuneAndAmphitriteTitle),
                text:  voc(p => p.neptuneAndAmphitriteText)
            },
            {
                imageUrl: archdukesAlbrechtAndIsabellaPublicUrl,
                title: voc(p => p.archdukesAlbrechtAndIsabellaTitle),
                text:  voc(p => p.archdukesAlbrechtAndIsabellaText)
            },
            {
                imageUrl: peasantDrinkingPublicUrl,
                title: voc(p => p.peasantDrinkingTitle),
                text:  voc(p => p.peasantDrinkingText)
            },
            {
                imageUrl: stillLifePublicUrl,
                title: voc(p => p.StillLifeTitle),
                text:  voc(p => p.StillLifeText)
            },
            {
                imageUrl: sundialPublicUrl,
                title: voc(p => p.StillLifeTitle),
                text:  voc(p => p.StillLifeText)
            },
            {
                imageUrl: ewerAndBasinPublicUrl,
                title: voc(p => p.ewerAndBasinTitle),
                text:  voc(p => p.ewerAndBasinText)
            },
        ]
    } />
}

export default RubensMuseumSlider