const Envelope = () => (
  <div className="w-[200px] h-[200px] bg-blue-500 relative flex justify-center items-center z-0 group">
    <div
      className="absolute h-full w-full border-x-[150px] border-x-transparent border-solid left-0 top-0
  border-botoom: 100px solid transparent
  transform-orgin: top z-[3] border-t-[100px] border-t-[#658CED] transform: rotateX(0deg) group-hover:delay-[0s]
  group-hover:transform: rotateX(90deg)"
    >
      lidone
    </div>

    <div
      className="absolute h-full w-full border-x-[150px] border-x-transparent border-solid left-0 top-0
  border-botoom: 100px solid transparent transform-orgin: top z-[1] border-t-[100px] border-t-[#3760C9]
  transform: rotateX(90deg)"
    >
      lidone
    </div>
    <div className="absolute h-full w-full top-0 left-0 border-l-[#A4D4F2] border-r-[#C4DFF0] border-t-[100px] border-t-transparent border-b-[150px] border-b-[#C4DFF0] border-x-[150px] border-solid z-[3]">
      envelope
    </div>
    <div className="absolute top-0 w-[80%] h-[80%] bg-white z-[2] rounded-[15px]">
      letter
      <p className="text-center text-xl mt-30px ">Hello</p>
    </div>
  </div>
)

export default Envelope
