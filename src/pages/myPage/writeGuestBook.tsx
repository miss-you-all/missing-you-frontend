import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ReactElement, FormEvent } from 'react'
import sunLetter from '../../assets/imgs/sunLetter.png'
import solarSystem from '../../constants/solarSystem.ts'
import type { TMyInfo } from './types/index.ts'

const MyRows = styled.div<{ key: number }>`
  border-width: 1px;
  border-color: rgb(0 0 0);
  display: flex;
`

const MyCol = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const WriteGuestBook = (): ReactElement => {
  const navigate = useNavigate()

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const checkbox = event.currentTarget.querySelector(
      'input[type="checkbox"]',
    ) as HTMLInputElement
    const isChecked = checkbox.checked

    if (isChecked) {
      navigate('/my-page')
    }
  }

  return (
    <>
      <div>
        <div className="text-5xl">To {name}'s 방명록 </div>
        <div className="flex justify-center my-2.5 ">
          ☀ 태양의 감미로운 목소리로 마음을 전해봐요 ☀
        </div>
        <img src={sunLetter} className="my-5" />
      </div>
      <div>
        <div className="m-2.5">다양한 행성들 중 하나를 골라주세요</div>
        <form method="post" onSubmit={handleFormSubmit}>
          <div className="border border-black w-full h-72 overflow-y-scroll my-5">
            {solarSystem.map((image) => (
              <MyRows key={image.index}>
                <MyCol>
                  <img src={image.path} alt="planet" className="w-10 bg-auto" />
                </MyCol>
                <MyCol>
                  <audio src={image.voice} controls className="w-60"></audio>
                </MyCol>
                <MyCol>
                  <input type="checkbox" value={image.index} />
                </MyCol>
              </MyRows>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[90%] justify-self-center border-black border-solid border-2 rounded-lg bg-white h-14 flex items-center px-5 lg:px-10 justify-center"
            >
              전송하기
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default WriteGuestBook
