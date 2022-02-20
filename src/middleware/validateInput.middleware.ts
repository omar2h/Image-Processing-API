import { Response, Request, NextFunction } from 'express'
import { query, ValidationError, validationResult } from 'express-validator'

const IMAGES = [
  'fjord',
  'encenadaport',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica',
]

const validateInput = () => [
  query('filename')
    .notEmpty()
    .withMessage('Filename is missing')
    .isIn(IMAGES)
    .withMessage('Image is not found'),
  query('width')
    .notEmpty()
    .withMessage('Width is missing')
    .isNumeric()
    .withMessage('Width must be a number'),
  query('height')
    .notEmpty()
    .withMessage('Height is missing')
    .isNumeric()
    .withMessage('Height must be a number'),
]

//check for error msg
const checkError = (req: Request, res: Response, next: NextFunction) => {
  const errorFormatter = ({ msg, param }: ValidationError) => {
    // Build your resulting errors however you want! String, object, whatever - it works!
    return `[${param}]: ${msg}`
  }
  const errors = validationResult(req).formatWith(errorFormatter)
  if (!errors.isEmpty()) {
    return res.status(422).send(errors.array({ onlyFirstError: true }))
  }
  next()
}

export { validateInput, checkError }
