import ImageWithoutSrc from "../..";

interface LaSalleMollienProps extends ImageWithoutSrc {

}

export const laSalleMollienPublicUrl = '/images/louvre/slider/la-salle-mollien.webp'


const LaSalleMollien: React.FC<LaSalleMollienProps> = (props) => {
    return (
        <img src={laSalleMollienPublicUrl} alt="la-joconde-salle-des-etats" {...props} />
    )
}

export default LaSalleMollien