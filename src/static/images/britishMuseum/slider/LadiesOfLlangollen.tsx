import ImageWithoutSrc from "../.."


interface LadiesOfLlangollenProps extends ImageWithoutSrc {

}

export const ladiesOfLlangollenPublicUrl = '/images/britishMuseum/slider/ladies-of-llangollen.jpg'

const LadiesOfLlangollen: React.FC<LadiesOfLlangollenProps> = (props) => {
    return (
        <img src={ladiesOfLlangollenPublicUrl} alt="ladies-of-llangollen" {...props} />
    )
}

export default LadiesOfLlangollen