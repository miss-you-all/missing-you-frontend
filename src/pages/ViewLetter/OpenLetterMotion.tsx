import React, { useState } from 'react'
import { Howl } from 'howler'
import HoverSoundFile from '../../assets/여러분.mp3'
import InnerLetter from './InnerLetter.tsx'

// style
import './OpenLetter.css'

const OpenLetterMotion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

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
