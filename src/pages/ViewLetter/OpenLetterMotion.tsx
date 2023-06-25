import React, { useState } from 'react'
import { Howl } from 'howler'
import HoverSoundFile from '../../assets/여러분.mp3'
import InnerLetter from './InnerLetter.tsx'

// style
import './OpenLetter.css'

const OpenLetterMotion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleLetter = () => {
    setIsOpen((prevState) => !prevState)
  }

  const handleHoverSound = () => {
    const sound = new Howl({ src: [HoverSoundFile] })
    sound.play()
  }

  const handleButtonClick = () => {
    handleHoverSound()
    toggleLetter()
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={`letter ${isOpen ? 'letter--open' : 'letter--close'}`}>
        <div className="paper">
          <InnerLetter />
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
