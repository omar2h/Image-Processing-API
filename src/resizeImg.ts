import sharp from 'sharp'

const resizeImage = async () => {
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
