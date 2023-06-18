import ImageWithoutSrc from "../.."

interface AssyrianReliefSculptureProps extends ImageWithoutSrc {

}

export const assyrianReliefSculpturePublicUrl = '/images/britishMuseum/informationCards/assyrian-relief-sculpture.jpg'

const AssyrianReliefSculpture: React.FC<AssyrianReliefSculptureProps> = (props) => {
    return (
        <img src={assyrianReliefSculpturePublicUrl} alt="assyrian-relief-sculpture" {...props} />
    )
}

export default AssyrianReliefSculpture