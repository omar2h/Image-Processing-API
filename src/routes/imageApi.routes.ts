import { Router, Request, Response } from 'express'
import {
  validateInput,
  checkError,
} from '../middleware/validateInput.middleware'
import resizeImage from '../controllers/imageApi.controller'

const router = Router()

router.use(validateInput(), checkError, (req: Request, res: Response) => {
  const filename: string = req.query.filename as string
  const width: number = parseInt(req.query.width as string)
  const height: number = parseInt(req.query.height as string)
  resizeImage(filename, width, height)
  res.send(`${filename}, ${width}, ${height}`)
})

export default router
