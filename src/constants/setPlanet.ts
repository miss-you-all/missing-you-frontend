export const setSize = (): number => {
  let size = 0
  while (size <= 30) {
    size = Math.floor(Math.random() * 100)
  }
  return size
}

export const setPosition = () => {
  let poX = 0
  let poY = 0

  while (poX <= 30 && poY <= 30) {
    poX = Math.floor(Math.random() * 100)
    poY = Math.floor(Math.random() * 100)
  }
  return [poX, poY]
}
