import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import image1 from '../../assets/imgs/taeyang1.jpg'
import image2 from '../../assets/imgs/taeyang2.jpg'
import image3 from '../../assets/imgs/taeyang3.jpg'
import './ImageSwiper.css'

function ImageSwiper() {
  const images = [{ src: image1 }, { src: image2 }, { src: image3 }]

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img src={image.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ImageSwiper

//   const images = [
//     { src: '../../assets/imgs/taeyang1.jpg' },
//     { src: '../../assets/imgs/taeyang2.jpg' },
//     { src: '../../assets/imgs/taeyang3.jpg' },
//   ]

//   const images = [
//     { src: require('../../assets/imgs/taeyang1.jpg').default },
//     { src: require('../../assets/imgs/taeyang2.jpg').default },
//     { src: require('../../assets/imgs/taeyang3.jpg').default },
//   ]

//    <SwiperSlide>
//   <img src={image1} />
// </SwiperSlide>
// <SwiperSlide>
//   <img src={image2} />
// </SwiperSlide>
// <SwiperSlide>
//   <img src={image3} />
// </SwiperSlide>
