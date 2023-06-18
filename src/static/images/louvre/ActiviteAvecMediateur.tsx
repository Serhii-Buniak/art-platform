import ImageWithoutSrc from "..";

interface ActiviteAvecMediateurProps extends ImageWithoutSrc {

}

export const activiteAvecMediateurPublicUrl = '/images/louvre/activite-avec-mediateur.webp'

const ActiviteAvecMediateur: React.FC<ActiviteAvecMediateurProps> = (props) => {
    return (
        <img src={activiteAvecMediateurPublicUrl} alt="activite-avec-mediateur" {...props} />
    )
}

export default ActiviteAvecMediateur