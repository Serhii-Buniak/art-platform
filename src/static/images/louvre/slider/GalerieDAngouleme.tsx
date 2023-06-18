import ImageWithoutSrc from "../..";

interface GalerieDAngoulemeProps extends ImageWithoutSrc {

}

export const galerieDAngoulemePublicUrl = '/images/louvre/slider/galerie-d-angouleme.webp'


const GalerieDAngouleme: React.FC<GalerieDAngoulemeProps> = (props) => {
    return (
        <img src={galerieDAngoulemePublicUrl} alt="galerie-d-angouleme" {...props} />
    )
}

export default GalerieDAngouleme