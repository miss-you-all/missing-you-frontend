import { Link } from 'react-router-dom'

const Intro = () => (
  <section className="grid grid-rows-[min-content_auto_min-content] gap-y-10">
    <div className="mt-10 grid grid-rows-[min-content_min-content] gap-y-1">
      <h1 className="text-[2rem] font-bold">너무 보고 싶었어요~</h1>
      <h3 className="text-[1.17rem] font-semibold">
        태양과 함께 마음을 주고 받으세요.
      </h3>
    </div>

    <img src={'../../../TheSun.jpg'} alt="태양" className="w-full h-full" />

    <button type="button" className="w-[90%] bg-sky-300 justify-self-center">
      <Link to="/send-letter">편지 보내기</Link>
    </button>
  </section>
)

export default Intro
