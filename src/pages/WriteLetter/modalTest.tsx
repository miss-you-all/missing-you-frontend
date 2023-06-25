import { ReactElement } from 'react'

const ModalTest = ({ openModal }: { openModal: () => void}): ReactElement => (
  <div>
    <div
      onClick={openModal}
      className="border-black border-solid border-2 rounded-lg bg-white h-14 flex justify-between items-center px-5 lg:px-10"
    >
      미리보기
    </div>
  </div>
)

export default ModalTest
