import { Router, Request, Response } from 'express'
import {
  validateInput,
  checkError,
} from '../middleware/validateInput.middleware'
import resizeImage from '../controllers/imageApi.controller'

const router = Router()

router.use(validateInput(), checkError, async (req: Request, res: Response) => {
  const filename: string = req.query.filename as string
  const width: number = parseInt(req.query.width as string)
  const height: number = parseInt(req.query.height as string)
  const imagePath: string = (await resizeImage(
    filename,
    width,
    height
  )) as string
  res.sendFile(imagePath)
})

export default router
