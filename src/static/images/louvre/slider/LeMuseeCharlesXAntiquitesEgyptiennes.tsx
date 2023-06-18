import ImageWithoutSrc from "../..";

interface LeMuseeCharlesXAntiquitesEgyptiennesProps extends ImageWithoutSrc {

}

export const leMuseeCharlesXAntiquitesEgyptiennesPublicUrl = '/images/louvre/slider/le-musee-charles-x-antiquites-egyptiennes.webp'


const LeMuseeCharlesXAntiquitesEgyptiennes: React.FC<LeMuseeCharlesXAntiquitesEgyptiennesProps> = (props) => {
    return (
        <img src={leMuseeCharlesXAntiquitesEgyptiennesPublicUrl} alt="le-musee-charles-x-antiquites-egyptiennes" {...props} />
    )
}

export default LeMuseeCharlesXAntiquitesEgyptiennes