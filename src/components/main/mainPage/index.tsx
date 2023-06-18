import Main from "../Main";
import Essay from "./Essay";
import Faq from "./Faq";
import GreetingMain from "./GreetingMain";
import Quotation from "./Quotation";
import VideoGreeting from "./VideoGreeting";

const MainPage: React.FC = () => {
    return (<Main>
        <GreetingMain />
        <Essay />
        <VideoGreeting />
        <Quotation />
        <Faq />
    </Main>)
}

export default MainPage;