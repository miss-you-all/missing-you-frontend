import { useState } from 'react'
import ModalTest from './modalTest.tsx'
import Preview from './preview.tsx'

const WriteLetter = () => {
  const [isModal, setIsModal] = useState<boolean>(false)

  function openModal() {
    setIsModal(true)
  }

  function closeModal() {
    setIsModal(false)
  }

  return (
    <section className="grid grid-rows[auto_min-content_min-content_min-content_min_content] gap-y-10 content-center h-full">
      {/* swiper */}
      <ImageSwiper />
      {/* Send, Receive Name */}
      <div className="grid grid-cols-2 justify-between gap-x-20">
        <div>
          <label htmlFor="sendName">보내는 사람</label>
          <input
            id="sendName"
            className="border-black border-solid border-2 rounded-lg w-full"
          />
        </div>
        <div>
          <label htmlFor="receiveName">받는 사람</label>
          <input
            id="receiveName"
            className="border-black border-solid border-2 rounded-lg w-full"
          />
        </div>
      </div>
      {/* Send Message */}
      <div className="flex flex-col ">
        <label htmlFor="message">메시지내용</label>
        <textarea
          id="message"
          className="h-40 border-black border-solid border-2 rounded-lg"
        />
      </div>
      {/* Preview Button */}
      <ModalTest openModal={openModal} />
      {isModal && <Preview open={isModal} close={closeModal} />}
      {/* Send Button */}
      <div className="border-black border-solid border-2 rounded-lg bg-white h-14 flex justify-center items-center px-5 lg:px-10">
        전송하기
      </div>
    </section>
  )
}

export default WriteLetter
