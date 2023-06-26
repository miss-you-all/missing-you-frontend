import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import image1 from '../../assets/imgs/taeyang1.jpg'
import image2 from '../../assets/imgs/taeyang2.jpg'
import image3 from '../../assets/imgs/taeyang3.jpg'
import './ImageSwiper.css'
import { useEffect, useState } from 'react'

function ImageSwiper({ setSwiperIndex, swiperIndex }) {
  const images = [{ src: image1 }, { src: image2 }, { src: image3 }]
  const [currentIndex, setCurrentIndex] = useState(swiperIndex)

  useEffect(() => {
    setCurrentIndex(swiperIndex)
  }, [swiperIndex])

  return (
    <div className="swiper-container z-0">
      <div className="swiper-wrapper">
        <strong className="current-page">{currentIndex + 1}</strong>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          // loop={true}
          navigation={true}
          modules={[Navigation]}
          onActiveIndexChange={(swiperCore) => {
            setCurrentIndex(swiperCore.activeIndex)
            setSwiperIndex(swiperCore.activeIndex)
          }}
          className="mySwiper"
        >
          {images.map((image, idx) => (
            <SwiperSlide key={idx} className="swiper-slide">
              <div className="image-container">
                <img src={image.src} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ImageSwiper
