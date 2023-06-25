import { ReactElement } from 'react'
import Letter from './letter.tsx'

interface props {
  open: boolean
  close: (v: boolean) => void
}

const Preview = (props: props): ReactElement => {
  const { open, close } = props

  return (
    <div className="modal-wrap">
      <div
        className={
          open
            ? ' items-center bg-black/50 flex h-full justify-center left-0 overflow-hidden absolute top-0 w-full'
            : ''
        }
      />
      <div className={open ? 'modal active' : 'modal'} />
      <div className="absolute bg-white mr-7 p-5">
        <div className="container grid mx-auto grid-cols-4 xl:grid-cols-12 md:grid-cols-8">
          <button
            className="mx-auto col-end-5 flex items-center mr-0 mb-5"
            onClick={close}
          >
            X
          </button>
        </div>
        <Letter
          recipient={'여러분'}
          sender={'코코'}
          image={'../lookAtMe.jpg'}
          text={'TS 어렵다. 그리고 졸립다. 태양!! 나만 바라봐!'}
        />
        <div className="border-black border-solid border-2 rounded-lg bg-white h-14 flex justify-between items-center px-5 lg:px-10 my-10">
          전송하기
        </div>
      </div>
    </div>
  )
}

export default Preview
