import ImageWithoutSrc from "..";

interface ActiviteScolairesProps extends ImageWithoutSrc {

}

export const activiteScolairesPublicUrl = '/images/louvre/activite-scolaires.webp'

const ActiviteScolaires: React.FC<ActiviteScolairesProps> = (props) => {
    return (
        <img src={activiteScolairesPublicUrl} alt="activite-scolaires" {...props} />
    )
}

export default ActiviteScolaires