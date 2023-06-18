import ImageWithoutSrc from "../..";

interface AnIdealOfGreekBeautyProps extends ImageWithoutSrc {

}

export const anIdealOfGreekBeautyPublicUrl = '/images/louvre/slider/venus-de-milo-vue-de-la-salle-de-la-grece-classique-et-hellenistique.webp'


const AnIdealOfGreekBeauty: React.FC<AnIdealOfGreekBeautyProps> = (props) => {
    return (
        <img src={anIdealOfGreekBeautyPublicUrl} alt="venus-de-milo-vue-de-la-salle-de-la-grece-classique-et-hellenistique" {...props} />
    )
}

export default AnIdealOfGreekBeauty