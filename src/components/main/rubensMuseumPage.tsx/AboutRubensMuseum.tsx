import { useVocabulary } from "../../../translation/vocabulary"
import AboutUsContainter from "../AboutUsContainter"

const AboutRubensMuseum: React.FC = () => {
    const voc = useVocabulary()

    return <AboutUsContainter
        title={voc(p => p.aboutRubensMuseumTitle)}
        text={voc(p => p.aboutRubensMuseumText)}
    />
}

export default AboutRubensMuseum