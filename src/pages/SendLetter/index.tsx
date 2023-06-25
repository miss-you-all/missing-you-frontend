import Envelope from './Envelope/index.tsx'

const SendLetter = () => (
  <section className="w-full h-full grid grid-rows-1 grid-cols-1 items-center justify-center">
    <div className="w-full h-[50%] min-h-[12.5rem] bg-sky-300 flex justify-center py-4">
      <Envelope />
    </div>
  </section>
)

export default SendLetter
