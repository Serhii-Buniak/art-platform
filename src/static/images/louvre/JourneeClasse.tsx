import ImageWithoutSrc from "..";

interface JourneeClasseProps extends ImageWithoutSrc {

}

export const journeeClassePublicUrl = '/images/louvre/journee-classe.webp'

const JourneeClasse: React.FC<JourneeClasseProps> = (props) => {
    return (
        <img src={journeeClassePublicUrl} alt="journee-classe" {...props} />
    )
}

export default JourneeClasse