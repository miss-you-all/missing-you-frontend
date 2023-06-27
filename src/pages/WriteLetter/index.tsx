import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import db from '../../../firebase.ts'
import ModalTest from './modalTest.tsx'
import Preview from './preview.tsx'
import ImageSwiper from './ImageSwiper.tsx'

const WriteLetter = () => {
  const [isModal, setIsModal] = useState<boolean>(false)
  const [swiperIndex, setSwiperIndex] = useState(0)
  const [sendName, setSendName] = useState('')
  const [receiveName, setReceiveName] = useState('')
  const [message, setMessage] = useState('')
  const [letterData, setLetterData] = useState({
    from: '',
    to: '',
    content: '',
    imageUrl: '../lookAtMe.jpg',
  })
  const onSendNameChange = (e) => setSendName(e.target.value)
  const onRecipientChange = (e) => setReceiveName(e.target.value)
  const onMessageChange = (e) => setMessage(e.target.value)

  const letter = {
    sendName,
    receiveName,
    message,
    swiperIndex,
  }

  const handleModal = () => {
    setIsModal(!isModal)
  }

  const handlePostLetter = async () => {
    const newLetterData = {
      from: letterData.from,
      to: letterData.to,
      content: letterData.content,
      createdAt: new Date().toISOString(),
      imageUrl: letterData.imageUrl,
    }

    try {
      const docRef = await addDoc(collection(db, 'letter'), newLetterData)
      console.log('잘저장됨: ', docRef.id)
    } catch (e) {
      console.error('저장안됨: ', e)
      alert('편지 저장에 문제가 있습니다. 다시 시도해주세요.')
    }
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
            value={sendName}
            onChange={onSendNameChange}
            className="border-black border-solid border-2 rounded-lg w-full px-2"
            type="text"
            {/* value={letterData.from} */}
            {/*
            onChange={(e) =>
              setLetterData({ ...letterData, from: e.target.value })
            }
            */}
          />
        </div>
        <div>
          <label htmlFor="receiveName">받는 사람</label>
          <input
            id="receiveName"
            value={receiveName}
            onChange={onRecipientChange}
            className="border-black border-solid border-2 rounded-lg w-full px-2"
            type="text"
            {/* value={letterData.to} */}
            {/* onChange={(e) =>
              setLetterData({ ...letterData, to: e.target.value })
            }
            */}
          />
        </div>
      </div>
      {/* Send Message */}
      <div className="flex flex-col ">
        <label htmlFor="message">메시지내용</label>
        <textarea
          id="message"
          value={message}
          onChange={onMessageChange}
          className="h-40 border-black border-solid border-2 rounded-lg p-2"
          {/* value={letterData.content} */}
          {/* onChange={(e) =>
            setLetterData({ ...letterData, content: e.target.value })
          }
          */}
        />
      </div>
      {/* Preview Button */}
      <ModalTest openModal={handleModal} />
      {isModal && (
        <Preview open={isModal} close={handleModal} letter={letter} />
      )}
      {/* Send Button */}
      <div 
        className="border-black border-solid border-2 rounded-lg bg-white h-14 flex justify-center items-center px-5 lg:px-10"
        // onClick={handlePostLetter}
        >
        전송하기
        {/*  <Link to="/send-letter">전송하기</Link> */} 
      </div>
    </section>
  )
}

export default WriteLetter
