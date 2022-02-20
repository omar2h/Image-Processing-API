import { checkImageExist } from '../controllers/imageApi.controller'

describe('Test checkImageExist func - to find if image exists', () => {
  it('expect checkIfImagesExist function defined ', () => {
    expect(checkImageExist).toBeDefined()
  })

  it('expect checkIfImagesExist function to return false with params hi, 100, 200 ', async () => {
    const ifImageExist: boolean = await checkImageExist('hi', 100, 200)
    expect(ifImageExist).toBe(false)
  })
})
