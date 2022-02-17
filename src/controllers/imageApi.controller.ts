import sharp from 'sharp'

const resizeImage = async (filename: string, width: number, height: number) => {
  //await checkImageExist(filename, width, height)
  try {
    await sharp('images/full/fjord.jpg')
      .resize({
        width: 200,
        height: 150,
      })
      .toFile('images/thumb/fjord-resized.jpg')
  } catch (error) {
    console.log(error)
  }
}

export default resizeImage
