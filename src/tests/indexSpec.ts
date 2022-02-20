import supertest from 'supertest'
import fs from 'fs'
import path from 'path'
import app from '../index'

const request = supertest(app)
describe('Test endpoint responses', () => {
  it('gets the /api/images endpoint to resize image', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=100&height=200'
    )
    expect(response.status).toBe(200)
  })

  it('Resized image should exist in thumb folder', () => {
    expect(
      fs.existsSync(
        `${path.resolve(__dirname, '../../images/thumb')}/fjord_100_200.jpg`
      )
    ).toBeTruthy()
  })
})
