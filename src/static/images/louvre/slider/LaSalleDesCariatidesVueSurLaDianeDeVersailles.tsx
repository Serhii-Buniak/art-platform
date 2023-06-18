import ImageWithoutSrc from "../..";

interface LaSalleDesCariatidesVueSurLaDianeDeVersaillesProps extends ImageWithoutSrc {

}

export const laSalleDesCariatidesVueSurLaDianeDeVersaillesPublicUrl = '/images/louvre/slider/la-salle-des-cariatides-vue-sur-la-diane-de-versailles.webp'


const LaSalleDesCariatidesVueSurLaDianeDeVersailles: React.FC<LaSalleDesCariatidesVueSurLaDianeDeVersaillesProps> = (props) => {
    return (
        <img src={laSalleDesCariatidesVueSurLaDianeDeVersaillesPublicUrl} alt="la-salle-des-cariatides-vue-sur-la-diane-de-versailles" {...props} />
    )
}

export default LaSalleDesCariatidesVueSurLaDianeDeVersailles