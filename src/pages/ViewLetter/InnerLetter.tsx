import React from 'react'
// import { collection, getDocs } from "firebase/firestore";
import './OpenLetter.css'

interface InnerLetterProps {
  isVisible: boolean
}

const InnerLetter: React.FC<InnerLetterProps> = ({ isVisible }) => {
  const res = {
    recipient: '여러분',
    sender: '코코',
    image: '../lookAtMe.jpg',
    text: 'TS 어렵다. 그리고 졸립다. 태양!! 나만 바라봐!',
  }
  //   const getLetterContents
  //   const querySnapshot = await getDocs(collection(db, "users"));
  // querySnapshot.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data()}`);
  // });

  return (
    <div className="relative z-99 h-auto bg-white p-5 col-span-6 col-start-2 lg:col-span-4 lg:col-start-5">
      <div className="border-black border-solid border-2 bg-white">
        <div className="h-10 m-4">
          {isVisible && <div className="float-left">TO {res.recipient}</div>}
        </div>
        <div>
          <img src={res.image} alt="letter-image" />
        </div>
        {isVisible && (
          <div className="flex items-center justify-start p-4 mx-auto">
            {res.text}
          </div>
        )}
        <div className="h-10 m-4">
          {isVisible && <div className="float-right">From. {res.sender}</div>}
        </div>
      </div>
    </div>
  )
}

export default InnerLetter
