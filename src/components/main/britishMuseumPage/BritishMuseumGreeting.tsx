import { britishMuseumGreetingImagePublicUrl } from "../../../static/images/britishMuseum/BritishMuseumGreetingImage"
import { useVocabulary } from "../../../translation/vocabulary"
import GreetingContainer from "../GreetingContainer"

const BritishMuseumGreeting: React.FC = () => {
    const voc = useVocabulary()

    return (<GreetingContainer title={voc(p => p.britishMuseum)} imageUrl={britishMuseumGreetingImagePublicUrl} />)
}

export default BritishMuseumGreeting