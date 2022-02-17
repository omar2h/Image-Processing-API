import { Response, Request, NextFunction } from 'express'
import { query, validationResult } from 'express-validator'
import images from '../images'

const validateInput = () => [
  query('filename')
    .notEmpty()
    .withMessage('Image name is empty')
    .isIn(images)
    .withMessage('Image is not found'),
]

//print error msg
const checkError = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).send(errors)
  }
  next()
}

export { validateInput, checkError }
