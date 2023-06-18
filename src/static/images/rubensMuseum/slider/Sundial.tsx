import ImageWithoutSrc from "../..";

interface SundialProps extends ImageWithoutSrc {

}

export const sundialPublicUrl = '/images/rubensMuseum/slider/sundial.jpg'


const Sundial: React.FC<SundialProps> = (props) => {
    return (
        <img {...props} src={sundialPublicUrl} alt="sundial" />
    )
}

export default Sundial