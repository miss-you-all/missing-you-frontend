import { ReactElement } from 'react'
import styled from 'styled-components'
import handleHoverSound from '../../constants/playVoice.ts'
import sun from '../../assets/imgs/sun.png'
import solarSystem from '../../constants/solarSystem.ts'
import { setSize, setPosition } from '../../constants/setPlanet.ts'

const MyPlanet = styled.img<{
  key: number
  size: number
  position: number[]
}>`
  width: ${(props) => props.size}px;
  position: relative;
  z-index: 1;
  left: ${(props) => props.position[0]}px;
  top: ${(props) => props.position[1]}px;
`

const ViewGuestBook = (): ReactElement => (
  <div className="bg-gradient-to-t from-blue-800 to-black fixed w-full h-full top-12 right-0.5">
    <div className="flex justify-center z-50 relative">
      <img src={sun} alt="태양" />
    </div>
    <div className="flex flex-wrap flex-col content-center">
      {solarSystem.map((image) => (
        <MyPlanet
          key={image.index}
          src={image.path}
          size={setSize()}
          position={setPosition()}
          onClick={handleHoverSound(image.voice)}
        />
      ))}
    </div>
  </div>
)
export default ViewGuestBook
