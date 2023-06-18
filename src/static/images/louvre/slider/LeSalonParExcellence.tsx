import ImageWithoutSrc from "../..";

interface LeSalonParExcellenceProps extends ImageWithoutSrc {

}

export const leSalonParExcellencePublicUrl = '/images/louvre/slider/le-salon-carre-apres-renovation.webp'


const LeSalonParExcellence: React.FC<LeSalonParExcellenceProps> = (props) => {
    return (
        <img src={leSalonParExcellencePublicUrl} alt="le-salon-carre-apres-renovation" {...props} />
    )
}

export default LeSalonParExcellence