import ImageWithoutSrc from ".."

interface SupportUsProps extends ImageWithoutSrc {
}

export const supportUsPublicUrl = '/images/rubensMuseum/support-us.jpg'


const SupportUsImage: React.FC<SupportUsProps> = (props) => {
    return (
        <img {...props} src={supportUsPublicUrl} alt="support-us" />
    )
}

export default SupportUsImage
