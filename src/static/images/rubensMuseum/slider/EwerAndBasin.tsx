import ImageWithoutSrc from "../..";

interface EwerAndBasinProps extends ImageWithoutSrc {

}

export const ewerAndBasinPublicUrl = '/images/rubensMuseum/slider/ewer-and-basin.jpg'


const EwerAndBasin: React.FC<EwerAndBasinProps> = (props) => {
    return (
        <img {...props} src={ewerAndBasinPublicUrl} alt="ewer-and-basin" />
    )
}

export default EwerAndBasin