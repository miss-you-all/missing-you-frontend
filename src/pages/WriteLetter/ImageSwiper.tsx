import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './ImageSwiper.css'
import { styled } from 'twin.macro'
import thumbnails from '../../constants/thumbnails.ts'

const SwiperWrapper = styled(SwiperSlide)<{ key: number }>`
`

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
            <SwiperWrapper key={image.index} className="swiper-slide">
              <div className="image-container">
                <img src={image.path} />
              </div>
            </SwiperWrapper>
          ))}
        </Swiper>
      </div>
    </div>
  )
}



export default ImageSwiper
