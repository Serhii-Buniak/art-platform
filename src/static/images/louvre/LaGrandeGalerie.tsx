import ImageWithoutSrc from ".."
interface LaGrandeGalerieProps extends ImageWithoutSrc {

}

export const laGrandeGaleriePublicUrl = '/images/louvre/la-grande-galerie.webp'

const LaGrandeGalerie: React.FC<LaGrandeGalerieProps> = (props) => {
    return (
        <img src={laGrandeGaleriePublicUrl} alt="la-grande-galerie" {...props} />
    )
}

export default LaGrandeGalerie