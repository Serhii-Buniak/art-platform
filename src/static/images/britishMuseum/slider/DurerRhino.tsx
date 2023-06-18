import ImageWithoutSrc from "../.."


interface DurerRhinoProps extends ImageWithoutSrc {

}

export const durerRhinoPublicUrl = '/images/britishMuseum/slider/durer-rhino.jpg'

const DurerRhino: React.FC<DurerRhinoProps> = (props) => {
    return (
        <img src={durerRhinoPublicUrl} alt="durer-rhino" {...props} />
    )
}

export default DurerRhino