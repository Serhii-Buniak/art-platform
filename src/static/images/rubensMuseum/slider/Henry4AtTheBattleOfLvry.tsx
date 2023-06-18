import ImageWithoutSrc from "../..";

interface Henry4AtTheBattleOfLvryProps extends ImageWithoutSrc {

}

export const henry4AtTheBattleOfLvryPublicUrl = '/images/rubensMuseum/slider/henry-4-at-the-battle-of-Ivry.jpg'


const Henry4AtTheBattleOfLvry: React.FC<Henry4AtTheBattleOfLvryProps> = (props) => {
    return (
        <img {...props} src={henry4AtTheBattleOfLvryPublicUrl} alt="henry-4-at-the-battle-of-Ivry" />
    )
}

export default Henry4AtTheBattleOfLvry