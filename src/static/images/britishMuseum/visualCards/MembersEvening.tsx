import ImageWithoutSrc from "../.."

interface MembersEveningProps extends ImageWithoutSrc {

}

export const membersEveningPublicUrl = '/images/britishMuseum/visualCards/members-evening.jpg'

const MembersEvening: React.FC<MembersEveningProps> = (props) => {
    return (
        <img src={membersEveningPublicUrl} alt="members-evening" {...props} />
    )
}

export default MembersEvening