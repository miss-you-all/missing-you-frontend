import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import solar from '../../assets/imgs/sun.png'
import percent from '../../constants/percent.ts'
import type { TMyInfo } from './types/index.ts'

const MySun = styled.img<{ power: number }>`
  opacity: calc(${(props) => props.power} / 100);
`

const SolarPower = ({ name, power }: TMyInfo): ReactElement => (
  <div className="flex flex-row my-7 ">
    <div className="basis-1/2">
      <MySun src={solar} power={power} />
    </div>
    <div className="basis-1/2 flex flex-col justify-around mx-2">
      <div className="flex justify-center">
        <div className="text-xl">{name} 님</div>
      </div>
      <div className="flex justify-center">
        <div>{percent(power)}°C</div>
      </div>
      <div className="flex justify-center">
        <div className="w-[90%] justify-self-center border-black border-solid border-2 rounded-lg bg-white h-14 flex items-center px-5 lg:px-10 justify-center">
          <Link to="/write-letter">편지 쓰기</Link>
        </div>
      </div>
    </div>
  </div>
)

export default SolarPower
