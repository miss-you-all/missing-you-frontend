import { TPreview } from './types/index.ts'

const Letter = ({ recipient, sender, image, text }: TPreview) => (
  <div className="border-black border-solid border-2 bg-white">
    <div className="h-10 m-4">
      <div className="float-left">TO {recipient}</div>
    </div>
    <div>
      <img src={image} alt="letter-image" />
    </div>
    <div className="flex items-center justify-start p-4 mx-auto ">{text}</div>
    <div className="h-10 m-4">
      <div className="float-right">From. {sender}</div>
    </div>
  </div>
)

export default Letter
