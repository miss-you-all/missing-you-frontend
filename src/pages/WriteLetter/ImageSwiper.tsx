import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './ImageSwiper.css'
import thumbnails from '../../constants/thumbnails.ts'

function ImageSwiper({ setSwiperIndex }) {
  return (
    <div className="swiper-container z-0">
      <div className="swiper-wrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          // loop={true}
          navigation={true}
          modules={[Navigation]}
          onActiveIndexChange={(swiperCore) => {
            setSwiperIndex(swiperCore.activeIndex)
          }}
          className="mySwiper"
        >
          {thumbnails.map((image) => (
            <SwiperSlide key={image.index} className="swiper-slide">
              <div className="image-container">
                <img src={image.path} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ImageSwiper
