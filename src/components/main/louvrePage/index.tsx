import Main from "../Main";
import GreetingLouvre from "./GreetingLouvre";
import SiteServices from "./SiteServices";
import LouvreCards from "./LouvreCards";
import LouvreSlider from "./LouvreSlider";
import { useVocabulary } from "../../../translation/vocabulary";

const LouvrePage: React.FC = () => {
    const voc = useVocabulary()

    return <Main>
        <GreetingLouvre />
        <LouvreSlider />
        <SiteServices />
        <LouvreCards />
    </Main>
}

export default LouvrePage;