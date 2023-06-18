import ImageWithoutSrc from "../..";

interface VueDeLaPyramideDuLouvreProps extends ImageWithoutSrc {

}

export const vueDeLaPyramideDuLouvrePublicUrl = '/images/louvre/slider/vue-de-la-pyramide-du-louvre.webp'


const VueDeLaPyramideDuLouvre: React.FC<VueDeLaPyramideDuLouvreProps> = (props) => {
    return (
        <img src={vueDeLaPyramideDuLouvrePublicUrl} alt="vue-de-la-pyramide-du-louvre" {...props} />
    )
}

export default VueDeLaPyramideDuLouvre