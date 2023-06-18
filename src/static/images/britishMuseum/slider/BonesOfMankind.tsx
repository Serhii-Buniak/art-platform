import ImageWithoutSrc from "../.."


interface BonesOfMankindProps extends ImageWithoutSrc {

}

export const bonesOfMankindPublicUrl = '/images/britishMuseum/slider/bones-of-mankind.jpg'

const BonesOfMankind: React.FC<BonesOfMankindProps> = (props) => {
    return (
        <img src={bonesOfMankindPublicUrl} alt="bones-of-mankind" {...props} />
    )
}

export default BonesOfMankind