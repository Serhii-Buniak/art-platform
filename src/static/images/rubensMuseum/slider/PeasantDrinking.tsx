import ImageWithoutSrc from "../..";

interface PeasantDrinkingProps extends ImageWithoutSrc {

}

export const peasantDrinkingPublicUrl = '/images/rubensMuseum/slider/peasant-drinking.jpg'


const PeasantDrinking: React.FC<PeasantDrinkingProps> = (props) => {
    return (
        <img {...props} src={peasantDrinkingPublicUrl} alt="peasant-drinking" />
    )
}

export default PeasantDrinking