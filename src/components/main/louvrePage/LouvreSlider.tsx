import { leSalonParExcellencePublicUrl } from '../../../static/images/louvre/slider/LeSalonParExcellence';
import { vueDeLaPyramideDuLouvrePublicUrl } from '../../../static/images/louvre/slider/VueDeLaPyramideDuLouvre';
import { laJocondeSalleDesEtatsPublicUrl } from '../../../static/images/louvre/slider/LaJocondeSalleDesEtats';
import { anIdealOfGreekBeautyPublicUrl } from '../../../static/images/louvre/slider/AnIdealOfGreekBeauty';
import { escalierDaruVictoireDeSamothracePublicUrl } from '../../../static/images/louvre/slider/EscalierDaruVictoireDeSamothrace';
import { leMuseeCharlesXAntiquitesEgyptiennesPublicUrl } from '../../../static/images/louvre/slider/LeMuseeCharlesXAntiquitesEgyptiennes';
import { laSalleMollienPublicUrl } from '../../../static/images/louvre/slider/LaSalleMollien';
import { laSalleDesCariatidesVueSurLaDianeDeVersaillesPublicUrl } from '../../../static/images/louvre/slider/LaSalleDesCariatidesVueSurLaDianeDeVersailles';
import { galerieDAngoulemePublicUrl } from '../../../static/images/louvre/slider/GalerieDAngouleme';
import { salleDeMediationDesArtsGraphiquesPublicUrl } from '../../../static/images/louvre/slider/SalleDeMediationDesArtsGraphiques';
import { useVocabulary } from '../../../translation/vocabulary';
import SliderContainer from '../SliderContainer';



const LouvreSlider: React.FC = () => {
  const voc = useVocabulary()

  return (<SliderContainer sliders={[
    {
      imageUrl: leSalonParExcellencePublicUrl,
      title: voc(p => p.salonParExcellenceTitle),
      text: voc(p => p.salonParExcellenceText),
    },
    {
      imageUrl: vueDeLaPyramideDuLouvrePublicUrl,
      title: voc(p => p.pyramidAsSymbolTitle),
      text: voc(p => p.pyramidAsSymbolText),
    },
    {
      imageUrl: laJocondeSalleDesEtatsPublicUrl,
      title: voc(p => p.monaLisaTitle),
      text: voc(p => p.monaLisaText),
    },
    {
      imageUrl: anIdealOfGreekBeautyPublicUrl,
      title: voc(p => p.idealOfGreekTitle),
      text: voc(p => p.idealOfGreekText),
    },
    {
      imageUrl: escalierDaruVictoireDeSamothracePublicUrl,
      title: voc(p => p.stairwayToVictoryTitle),
      text: voc(p => p.stairwayToVictoryText),
    },
    {
      imageUrl: leMuseeCharlesXAntiquitesEgyptiennesPublicUrl,
      title: voc(p => p.egyptianMuseumTitle),
      text: voc(p => p.egyptianMuseumText),
    },
    {
      imageUrl: laSalleMollienPublicUrl,
      title: voc(p => p.frenchPaintersTitle),
      text: voc(p => p.frenchPaintersText),
    },
    {
      imageUrl: laSalleDesCariatidesVueSurLaDianeDeVersaillesPublicUrl,
      title: voc(p => p.renaissancePalaceTitle),
      text: voc(p => p.renaissancePalaceText),
    },
    {
      imageUrl: galerieDAngoulemePublicUrl,
      title: voc(p => p.treasuresOfMediterraneanTitle),
      text: voc(p => p.treasuresOfMediterraneanText),
    },
    {
      imageUrl: salleDeMediationDesArtsGraphiquesPublicUrl,
      title: voc(p => p.drawingsPrintsPastelsTitle),
      text: voc(p => p.treasuresOfMediterraneanText),
    },
  ]}
  />)

}

export default LouvreSlider