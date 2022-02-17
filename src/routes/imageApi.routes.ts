import { Router } from 'express'
import {
  validateInput,
  checkError,
} from '../middleware/validateInput.middleware'

const router = Router()

router.use(validateInput(), checkError)

export default router
