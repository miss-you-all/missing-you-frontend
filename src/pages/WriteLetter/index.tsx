import { useState } from 'react'
import { Link } from 'react-router-dom'
import ModalTest from './modalTest.tsx'
import Preview from './preview.tsx'
import ImageSwiper from './ImageSwiper.tsx'

const WriteLetter = () => {
  const [isModal, setIsModal] = useState<boolean>(false)
  const [swiperIndex, setSwiperIndex] = useState(0)
  const [sender, setSender] = useState('')
  const [recipient, setRecipient] = useState('')
  const [content, setContent] = useState('')

  const onSenderChange = (e) => setSender(e.target.value)
  const onRecipientChange = (e) => setRecipient(e.target.value)
  const onContentChange = (e) => setContent(e.target.value)

  // 아래와 같이 활용할 데이터를 활용할 예정
  // console.log('url:', '../../assets/imgs/taeyang{swiperIndex}')
  // console.log(sender)
  // console.log(recipient)
  // console.log(content)

  function openModal() {
    setIsModal(true)
  }

  function closeModal() {
    setIsModal(false)
  }

  return (
    <section className="grid grid-rows[auto_min-content_min-content_min-content_min_content] gap-y-10 content-center h-full">
      {/* swiper */}
      <ImageSwiper setSwiperIndex={setSwiperIndex} swiperIndex={swiperIndex} />
      {/* Send, Receive Name */}
      <div className="grid grid-cols-2 justify-between gap-x-20">
        <div>
          <label htmlFor="sendName">보내는 사람</label>
          <input
            id="sendName"
            value={sender}
            onChange={onSenderChange}
            className="border-black border-solid border-2 rounded-lg w-full"
          />
        </div>
        <div>
          <label htmlFor="receiveName">받는 사람</label>
          <input
            id="receiveName"
            value={recipient}
            onChange={onRecipientChange}
            className="border-black border-solid border-2 rounded-lg w-full"
          />
        </div>
      </div>
      {/* Send Message */}
      <div className="flex flex-col ">
        <label htmlFor="message">메시지내용</label>
        <textarea
          id="message"
          value={content}
          onChange={onContentChange}
          className="h-40 border-black border-solid border-2 rounded-lg"
        />
      </div>
      {/* Preview Button */}
      <ModalTest openModal={openModal} />
      {isModal && <Preview open={isModal} close={closeModal} />}
      {/* Send Button */}
      <div className="border-black border-solid border-2 rounded-lg bg-white h-14 flex justify-center items-center px-5 lg:px-10">
        {/* state 값으로 데이터 전송, 현재 null 오류 해결 필요 */}
        <Link to={'/send-letter'} state={(sender, recipient, content)}>
          전송하기
        </Link>
      </div>
    </section>
  )
}

export default WriteLetter
