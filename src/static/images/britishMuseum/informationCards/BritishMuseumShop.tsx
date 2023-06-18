import ImageWithoutSrc from "../.."

interface BritishMuseumShopProps extends ImageWithoutSrc {

}

export const britishMuseumShopPublicUrl = '/images/britishMuseum/informationCards/british-museum-shop.jpg'

const BritishMuseumShop: React.FC<BritishMuseumShopProps> = (props) => {
    return (
        <img src={britishMuseumShopPublicUrl} alt="british-museum-shop" {...props} />
    )
}

export default BritishMuseumShop