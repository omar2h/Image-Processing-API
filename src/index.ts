import express from 'express'
import resizeImage from './resizeImg'

const app = express()

const port = 3000

app.get('/api', resizeImage)

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
