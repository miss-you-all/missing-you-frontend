import React, { useRef, useState } from 'react'
import {} from 'twin.macro'
import html2canvas from 'html2canvas'
import saveAs from 'file-saver'
import { CardContainer } from './style.ts'

const Envelope = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const [isOpen, setisOpen] = useState(false)

  const handleOpen = () => {
    setisOpen((prev) => !prev)
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
    <>
      {/* <Container>
      <div className="envelope">
        <div className="envelope-body">
          <div className="back-fold"></div>
          <div className="letter">
            <div className="letter-body"></div>
            <div className="letter-title"></div>
            <div className="letter-context"></div>
            <div className="letter-stamp">
              <div className="letter-stamp-inner"></div>
            </div>
          </div>
          <div className="top-fold"></div>
          <div className="body"></div>
          <div className="left-fold"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </Container> */}
      <CardContainer tw="mx-auto flex flex-col items-center justify-center h-full">
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
        <div tw="flex m-8 gap-x-4">
          <button tw="bg-slate-200 p-4 rounded-md">공유하기</button>
          <button tw="bg-slate-500 p-4 rounded-md" onClick={handleDownload}>
            다운로드
          </button>
        </div>
      </CardContainer>
    </>
  )
}

export default Envelope
