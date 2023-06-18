import { useVocabulary } from "../../../translation/vocabulary"
import AboutUsContainter from "../AboutUsContainter"


const AboutBritishMuseum: React.FC = () => {
    const voc = useVocabulary()

    return <AboutUsContainter
        title={voc(p => p.AboutBritishMuseumTitle)}
        text={voc(p => p.AboutBritishMuseumText)}
    />
}

export default AboutBritishMuseum