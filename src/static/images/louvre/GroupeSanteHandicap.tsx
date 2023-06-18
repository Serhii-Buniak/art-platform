import ImageWithoutSrc from "..";

interface GroupeSanteHandicapProps extends ImageWithoutSrc {

}

export const groupeSanteHandicapPublicUrl = '/images/louvre/groupe-sante-handicap.webp'

const GroupeSanteHandicap: React.FC<GroupeSanteHandicapProps> = (props) => {
    return (
        <img src={groupeSanteHandicapPublicUrl} alt="groupe-sante-handicap" {...props} />
    )
}

export default GroupeSanteHandicap