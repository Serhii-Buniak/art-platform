import Main from "../Main";
import AboutBritishMuseum from "./AboutBritishMuseum";
import BritishInformationCards from "./BritishInformationCards";
import BritishMuseumGreeting from "./BritishMuseumGreeting";
import BritishMuseumSlider from "./BritishMuseumSlider";
import BritishVisualCards from "./BritishVisualCards";

interface BritishMuseumPageProps {

}

const BritishMuseumPage: React.FC<BritishMuseumPageProps> = () => {
    return <Main>
        <BritishMuseumGreeting />
        <BritishMuseumSlider />
        <BritishVisualCards />
        <AboutBritishMuseum />
        <BritishInformationCards />
    </Main>
}

export default BritishMuseumPage;