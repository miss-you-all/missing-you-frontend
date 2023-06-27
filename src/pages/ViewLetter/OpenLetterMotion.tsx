import React, { useState } from 'react'
import { Howl } from 'howler'
import HoverSoundFile from '../../assets/여러분.mp3'
import InnerLetter from './InnerLetter.tsx'
// import db from '../../../firebase.ts'
// import { doc, getDoc } from 'firebase/firestore/lite'

// style
import './OpenLetter.css'

const OpenLetterMotion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // const [letterData, setLetterData] = useState({
  //   from: '',
  //   to: '',
  //   content: '',
  // })

  const toggleLetter = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleHoverSound = () => {
    const sound = new Howl({ src: [HoverSoundFile] })
    sound.play()
  }

  const showLetter = () => {
    setTimeout(() => {
      setIsVisible(true)
    }, 500)
  }

  const handleButtonClick = () => {
    handleHoverSound()
    toggleLetter()
    showLetter()
  }

  // const getLetterContents = async () => {
  //   try {
  //     const letterDocRef = doc(db, 'letters', letterId);
  //     const letterSnapshot = await getDoc(letterDocRef);
  //     if (letterSnapshot.exists()) {
  //       const letter = letterSnapshot.data();
  //       setLetterData(letter);
  //     } else {
  //       console.log('Letter not found');
  //     }
  //   } catch (e) {
  //     console.error('Error fetching letter data:', e);
  //   }
  // };

  // useEffect(() => {

  // }, [letterId]);

  return (
    <div className="flex justify-center items-center h-60vh">
      <div className={`letter ${isOpen ? 'letter--open' : 'letter--close'}`}>
        <div className="paper">
          <InnerLetter isVisible={isVisible} />
        </div>
        <div className="envelope" onClick={handleButtonClick}>
          <div className="envelope-paper"></div>
          <div className="envelope-flap"></div>
          <div className="envelope-detail"></div>
        </div>
      </div>
    </div>
  )
}

export default OpenLetterMotion
