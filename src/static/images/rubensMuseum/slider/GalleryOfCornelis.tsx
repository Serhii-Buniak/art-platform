import ImageWithoutSrc from "../..";

interface GalleryOfCornelisProps extends ImageWithoutSrc {

}

export const galleryOfCornelisPublicUrl = '/images/rubensMuseum/slider/gallery-of-cornelis.jpg'


const GalleryOfCornelis: React.FC<GalleryOfCornelisProps> = (props) => {
    return (
        <img {...props} src={galleryOfCornelisPublicUrl} alt="gallery-of-cornelis" />
    )
}

export default GalleryOfCornelis