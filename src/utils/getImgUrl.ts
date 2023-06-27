import thumbnails from '../constants/thumbnails.ts'

const getImgUrl = (imgIndex: number) =>
  thumbnails.filter((thumnail) => thumnail.index === imgIndex)[0].path

export default getImgUrl
