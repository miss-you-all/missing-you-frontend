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
      <div className="w-50 h-60 bg-sky-300" />
      {/* Send, Receive Name */}
      <div className="grid grid-cols-2 justify-between gap-x-20">
        <div>
          <label htmlFor="sendName">보내는 사람</label>
          <input id="sendName" />
        </div>
        <div>
          <label htmlFor="receiveName">받는 사람</label>
          <input id="receiveName" />
        </div>
      </div>
      {/* Send Message */}
      <div className="flex flex-col">
        <label htmlFor="message">메시지내용</label>
        <textarea id="message" className="h-40" />
      </div>
      {/* Preview Button */}
      <ModalTest openModal={openModal} />
      {isModal && <Preview open={isModal} close={closeModal} />}
      {/* Send Button */}
      <button
        type="button"
        className="w-40 justify-self-center h-10 bg-pink-400"
        >
        전송하기
      </button>
    </section>
  )
}

export default WriteLetter
