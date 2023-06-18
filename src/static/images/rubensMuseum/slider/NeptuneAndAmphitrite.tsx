import ImageWithoutSrc from "../..";

interface NeptuneAndAmphitriteProps extends ImageWithoutSrc {

}

export const neptuneAndAmphitritePublicUrl = '/images/rubensMuseum/slider/neptune-and-amphitrite.jpg'


const NeptuneAndAmphitrite: React.FC<NeptuneAndAmphitriteProps> = (props) => {
    return (
        <img {...props} src={neptuneAndAmphitritePublicUrl} alt="neptune-and-amphitrite" />
    )
}

export default NeptuneAndAmphitrite