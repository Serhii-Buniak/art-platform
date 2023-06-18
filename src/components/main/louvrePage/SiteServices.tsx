import EquipmentLoanIcon from "../../../static/images/louvre/services/EquipmentLoanIcon"
import FreeWiFiIcon from "../../../static/images/louvre/services/FreeWiFiIcon"
import InformationPointsIcon from "../../../static/images/louvre/services/InformationPointsIcon"
import LockerRoomIcon from "../../../static/images/louvre/services/LockerRoomIcon"
import ParkingIcon from "../../../static/images/louvre/services/ParkingIcon"
import ToiletIcon from "../../../static/images/louvre/services/ToiletIcon"
import styled from "../../../styles/styled"
import { useVocabulary } from "../../../translation/vocabulary"

const SiteServicesStyled = styled.section`
    width: 1100px;
    margin: 120px auto auto auto;
    color: ${p => p.theme.colors.text};

    .title {
        display: flex;
        justify-content:space-between;
        align-items: center;
        margin-bottom: 50px;

        h2 {
            font-size: 24px;
            text-align: center;
            width: 270px;
            text-transform: uppercase;
        }

        hr {
            width: 400px;
            border-bottom: 2px solid ${p => p.theme.colors.highText};
            height: 1px;
        }
    }

    .list {
        display: grid;
        gap: 5px;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .site-service {
        height: 300px;
        background-color: ${p => p.theme.colors.back2};

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 50px 0;

        .text {
            font-size: 18px;
        }
    }

`

interface SiteServicesProps {

}

const SiteServices: React.FC<SiteServicesProps> = () => {
    const voc = useVocabulary()

    return <SiteServicesStyled>
        <div className="title">
            <hr />
            <h2>{voc(p => p.siteServices)}</h2>
            <hr />
        </div>
        <ul className="list">
            <SiteService icon={<InformationPointsIcon />} text={voc(p => p.informationPoints)} />
            <SiteService icon={<EquipmentLoanIcon />} text={voc(p => p.equipmentLoan)} />
            <SiteService icon={<LockerRoomIcon />} text={voc(p => p.lockerRoom)} />
            <SiteService icon={<FreeWiFiIcon />} text={voc(p => p.freeWiFi)} />
            <SiteService icon={<ToiletIcon />} text={voc(p => p.toilet)} />
            <SiteService icon={<ParkingIcon />} text={voc(p => p.parking)} />
        </ul>
    </SiteServicesStyled>
}

interface SiteServiceProps {
    icon: React.ReactNode
    text: string
}

const SiteService: React.FC<SiteServiceProps> = ({ icon, text }) => {
    return <li className="site-service">
        <div className="icon">
            {icon}
        </div>
        <div className="text">
            {text}
        </div>
    </li>
}

export default SiteServices