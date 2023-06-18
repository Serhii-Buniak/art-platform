import Main from "../Main";
import AboutRubens from "./AboutRubens";
import AboutRubensMuseum from "./AboutRubensMuseum";
import GreetingRubensMuseum from "./GreetingRubensMuseum";
import RubensMuseumSlider from "./RubensMuseumSlider";
import CardsRubensMuseum from "./CardsRubensMuseum";

const RubensMuseumPage: React.FC = () => {

    return <Main>
        <GreetingRubensMuseum />
        <RubensMuseumSlider />
        <AboutRubensMuseum />
        <CardsRubensMuseum />
        <AboutRubens />
    </Main>
}

export default RubensMuseumPage