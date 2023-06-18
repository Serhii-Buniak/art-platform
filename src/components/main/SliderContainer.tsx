import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '../../styles/styled';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

const SliderContainerStyled = styled.section`
  margin: 100px auto;
  width: 100%;
  --swiper-theme-color: ${p => p.theme.colors.highText};

  .swiper {
    background-color: black;
    height: 95vh;
    width: 95vw;
    box-shadow:  0 0 0.3em ${p => p.theme.colors.text};
  }
`

interface SliderContainerProps {
    sliders: {
        imageUrl: string
        title: string
        text: string
    }[]
}

const SliderContainer: React.FC<SliderContainerProps> = ({ sliders }) => {

    return (
        <SliderContainerStyled>
            <Swiper className='swiper'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {sliders.map((slider, index) => (
                    <SwiperSlide key={index}>
                        <Slide
                            imageUrl={slider.imageUrl}
                            title={slider.title}
                            text={slider.text}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </SliderContainerStyled>
    )
}


const LouvreSlideStyled = styled.div`
  height: 100%;
  width: 100%;
  background-size: contain;
  background-position: center center ;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 20px;


  color: ${p => p.theme.colors.text};

  .title {
    font-size: 48px;
    background-color: ${p => p.theme.colors.backOpacity90};
    padding: 10px;
  }

  .text {
    background-color: ${p => p.theme.colors.backOpacity90};
    padding: 10px;
    font-size: 24px;
    margin-bottom: 50px
  }
`

interface LouvreSlideProps {
    imageUrl: string
    title: string
    text: string
}

const Slide: React.FC<LouvreSlideProps> = ({ imageUrl, title, text }) => {
    return <LouvreSlideStyled style={{ backgroundImage: `url(${imageUrl})` }}>
        <h3 className='title'>{title}</h3>
        <div className='text'>{text}</div>
    </LouvreSlideStyled>
}
export default SliderContainer