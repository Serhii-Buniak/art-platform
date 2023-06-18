import { rubensMuseumGreetingPublicUrl } from "../../../static/images/rubensMuseum/RubensMuseumGreetingImage"
import { useVocabulary } from "../../../translation/vocabulary"
import GreetingContainer from "../GreetingContainer"

const GreetingRubensMuseum: React.FC = () => {
    const voc = useVocabulary()

    return <GreetingContainer imageUrl={rubensMuseumGreetingPublicUrl} title={voc(p => p.rubensMuseum)} />
}

export default GreetingRubensMuseum