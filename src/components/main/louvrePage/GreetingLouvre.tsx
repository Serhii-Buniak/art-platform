import { laGrandeGaleriePublicUrl } from "../../../static/images/louvre/LaGrandeGalerie"
import { useVocabulary } from "../../../translation/vocabulary"
import GreetingContainer from "../GreetingContainer"


const GreetingLouvre: React.FC = () => {
    const voc = useVocabulary()

    return <GreetingContainer imageUrl={laGrandeGaleriePublicUrl} title={voc(p => p.louvre)}/>
}


export default GreetingLouvre