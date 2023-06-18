import ImageWithoutSrc from ".."

interface OrganisationProps extends ImageWithoutSrc {
}

export const organisationPublicUrl = '/images/rubensMuseum/organisation.jpg'

const OrganisationImage: React.FC<OrganisationProps> = (props) => {
    return (
        <img {...props} src={organisationPublicUrl} alt="organisation" />
    )
}

export default OrganisationImage
