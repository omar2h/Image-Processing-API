import sharp from 'sharp'
import path from 'path'
import fs from 'fs-extra'

const checkImageExist = async (
  filename: string,
  width: number,
  height: number
): Promise<boolean> => {
  const imagePath = path.resolve(__dirname, '../../images/thumb')
  return fs.pathExists(`${imagePath}/${filename}_${width}_${height}.jpg`)
}

const resizeImage = async (
  filename: string,
  width: number,
  height: number
): Promise<string | undefined> => {
  const imagePath = path.resolve(__dirname, `../../images/full/${filename}.jpg`)
  const imageOutPath = path.resolve(
    __dirname,
    `../../images/thumb/${filename}_${width}_${height}.jpg`
  )
  const ifImageExist: boolean = await checkImageExist(filename, width, height)
  if (ifImageExist) return imageOutPath
  try {
    await sharp(imagePath)
      .resize({
        width: width,
        height: height,
      })
      .toFile(imageOutPath)
    return imageOutPath
  } catch (error) {
    console.log(error)
  }
}

export default resizeImage
