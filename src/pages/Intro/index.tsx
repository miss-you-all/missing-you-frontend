import { Link } from 'react-router-dom'

const Intro = () => (
  <section className="grid grid-rows-[min-content_auto_min-content] gap-y-5">
    <div className="mt-10 grid grid-rows-[min-content_min-content] gap-y-2 text-center">
      <h1 className="text-[2rem] font-bold">너무 보고 싶었어요~</h1>
      <h3 className="text-[1.17rem] font-semibold">
        태양과 함께 마음을 주고 받으세요.
      </h3>
    </div>
    <img src={'/everyone.png'} alt="태양" className="w-full h-full" />
    <div className="w-[90%] justify-self-center border-black border-solid border-2 rounded-lg bg-white h-14 flex items-center px-5 lg:px-10 justify-center mt-2">
      <Link to="/write-letter">편지 보내기</Link>
    </div>
    <div className="w-[90%] justify-self-center border-black border-solid border-2 rounded-lg bg-white h-14 flex items-center px-5 lg:px-10 justify-center">
      <Link to="/view-letter">편지 보기</Link>
    </div>
  </section>
)

export default Intro
