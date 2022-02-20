import fs from 'fs-extra'
import path from 'path'
import {
  checkImageExist,
  resizeImage,
} from '../controllers/imageApi.controller'

describe('Test checkImageExist func - to find if image exists', () => {
  it('expect checkIfImagesExist function defined ', () => {
    expect(checkImageExist).toBeDefined()
  })

  it('expect checkIfImagesExist function to return false with params hi, 100, 200 ', async () => {
    const ifImageExist: boolean = await checkImageExist('hi', 100, 200)
    expect(ifImageExist).toBe(false)
  })
})

describe('Test resizeImage func', () => {
  it('expect resizeImage function defined ', () => {
    expect(resizeImage).toBeDefined()
  })

  it('test resizeImage func - to return image output path ', async () => {
    const imageOutPath = path.resolve(
      __dirname,
      `../../images/thumb/fjord_100_200.jpg`
    )
    expect(await resizeImage('fjord', 100, 200)).toBe(imageOutPath)
  })

  it('Resized image should exist in thumb folder', () => {
    expect(
      fs.existsSync(
        `${path.resolve(__dirname, '../../images/thumb')}/fjord_100_200.jpg`
      )
    ).toBeTruthy()
  })
})
