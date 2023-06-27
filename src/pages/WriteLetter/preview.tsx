import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import Letter from './letter.tsx'
import getImgUrl from '../../utils/getImgUrl.ts'

interface Props {
  open: boolean
  close: () => void
  letter: {
    sendName: string
    receiveName: string
    message: string
    swiperIndex: number
  }
}

const Preview = ({ open, close, letter }: Props): ReactElement => (
  <div className="z-0 absolute w-screen h-screen top-0 left-0 items-center justify-center grid mx-auto grid-cols-8 lg:grid-cols-12">
    <div
      className={
        open
          ? 'absolute z-2 top-0 left-0 items-center bg-black/50 flex h-full overflow-hidden w-full'
          : ''
      }
    />
    <div className="relative z-99 h-auto bg-white p-5 col-span-6 col-start-2 lg:col-span-4 lg:col-start-5">
      <div className="container grid mx-auto grid-cols-4 xl:grid-cols-12 md:grid-cols-8">
        <button
          className="mx-auto xl:col-end-13 md:col-end-9 col-end-5 flex items-center mr-0 mb-5"
          onClick={close}
        >
          X
        </button>
      </div>
      <Letter
        recipient={letter.receiveName}
        sender={letter.sendName}
        image={getImgUrl(letter.swiperIndex)}
        text={letter.message}
      />
      <div className="border-black border-solid border-2 rounded-lg bg-white h-14 flex justify-between items-center px-5 lg:px-10 my-10">
        <Link to="/send-letter">전송하기</Link>
      </div>
    </div>
  </div>
)

export default Preview
