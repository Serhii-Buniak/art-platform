import ImageWithoutSrc from "../..";

interface StillLifeProps extends ImageWithoutSrc {

}

export const stillLifePublicUrl = '/images/rubensMuseum/slider/still-life.jpg'


const StillLife: React.FC<StillLifeProps> = (props) => {
    return (
        <img {...props} src={stillLifePublicUrl} alt="still-life" />
    )
}

export default StillLife