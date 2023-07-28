import { MouseEventHandler } from 'react'
import { Howl } from 'howler'

const handleHoverSound =
  (voice: string): MouseEventHandler<HTMLImageElement> =>
  () => {
    const sound = new Howl({ src: [voice] })
    sound.play()
  }

export default handleHoverSound
