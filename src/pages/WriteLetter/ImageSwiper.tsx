import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import image1 from '../../assets/imgs/taeyang1.jpg'
import image2 from '../../assets/imgs/taeyang2.jpg'
import image3 from '../../assets/imgs/taeyang3.jpg'
import './ImageSwiper.css'

function ImageSwiper() {
  const images = [{ src: image1 }, { src: image2 }, { src: image3 }]

  return (
    <div className="swiper-container z-0">
      <div className="swiper-wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {images.map((image) => (
            <SwiperSlide className="swiper-slide">
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
