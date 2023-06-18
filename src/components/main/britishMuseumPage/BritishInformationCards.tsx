import AssyrianReliefSculpture from "../../../static/images/britishMuseum/informationCards/AssyrianReliefSculpture"
import BritishMuseumShop from "../../../static/images/britishMuseum/informationCards/BritishMuseumShop"
import { useVocabulary } from "../../../translation/vocabulary"
import InformationCardsContainer from "../InformationCardsContainer"

const BritishInformationCards: React.FC = () => {
    const voc = useVocabulary()

    return <InformationCardsContainer cards={[
        {
            title: voc(p => p.donateTitle),
            text: voc(p => p.donateText),
            image: <AssyrianReliefSculpture />,
            link: "https://www.britishmuseum.org/support-us/donate",
        },
        {
            title: voc(p => p.shopOnlineTitle),
            text: voc(p => p.shopOnlineText),
            image: <BritishMuseumShop />,
            link: "https://www.britishmuseumshoponline.org/?_gl=1*udag27*_ga*NTE1MTk4MTYzLjE2ODQxOTY5NzI.*_ga_08TLB9R8X1*MTY4NDIwOTExNi4zLjEuMTY4NDIxMjA2NC4yNy4wLjA.&_ga=2.94514332.1245628578.1684196973-515198163.1684196972",
        }
    ]} />
}

export default BritishInformationCards