import ImageWithoutSrc from "../..";

interface LadyAtTheFishmarketProps extends ImageWithoutSrc {

}

export const ladyAtTheFishmarketPublicUrl = '/images/rubensMuseum/slider/A-lady-at-the-fishmarket-in-Antwerp.jpg'


const LadyAtTheFishmarket: React.FC<LadyAtTheFishmarketProps> = (props) => {
    return (
        <img {...props} src={ladyAtTheFishmarketPublicUrl} alt="A-lady-at-the-fishmarket-in-Antwerp" />
    )
}

export default LadyAtTheFishmarket;