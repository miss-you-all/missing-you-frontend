// eslint-
import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import saveAs from 'file-saver'
import CardContainer from './style.ts'

const Envelope = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isOpen, setisOpen] = useState(false)

  const handleOpen = () => {
    setisOpen((prev) => !prev)
  }

  const handleShareKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '딸기 치즈 케익',
        description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
        // TODO: 이미지 링크
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          // TODO: View Letter Link
          // /to?={TO}from?={from}image
          mobileWebUrl: 'https://developers.kakao.com',
          webUrl: 'https://developers.kakao.com',
        },
      },
    })
  }

  const handleDownload = async () => {
    if (!divRef.current) return

    try {
      const div = divRef.current
      const canvas = await html2canvas(div, { scale: 2 })
      canvas.toBlob((blob) => {
        if (blob !== null) {
          saveAs(blob, 'result.png')
        }
      })
    } catch (error) {
      console.error('Error converting div to image:', error)
    }
  }

  return (
    <CardContainer>
      <div
        className={`card ${isOpen ? 'open' : ''}`}
        ref={divRef}
        onClick={handleOpen}
      >
        <div className="cardFront">
          <h3 className="happy">여러분~</h3>
          <div className="balloons">
            <img src="/assets/imgs/everyone.jpg" alt="taeyang" />
          </div>
        </div>
        <div className="cardInside">
          <h3 className="back">여러분!</h3>
          <p>태양,</p>
          <p>나는 태양이다. 나는 태양이다. 나는 태양이다.</p>
          <p className="name">태양인</p>
        </div>
      </div>
      <div className="flex gap-x-4 justify-center">
        <button
          className="bg-slate-200 p-2 rounded-md"
          onClick={handleShareKakao}
        >
          <img
            src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
            alt="카카오링크 보내기 버튼"
          />
        </button>
        <button
          className="bg-slate-500 p-2 rounded-md"
          onClick={handleDownload}
        >
          저장하기
        </button>
      </div>
    </CardContainer>
  )
}

export default Envelope
