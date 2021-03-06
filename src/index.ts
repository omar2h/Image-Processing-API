import express from 'express'
import imagesApiRouter from './routes/imageApi.routes'

const app = express()

const port = 3000

app.use('/api/images', imagesApiRouter)

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})

export default app
