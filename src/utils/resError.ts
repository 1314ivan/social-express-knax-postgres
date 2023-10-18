import { HttpError } from 'http-errors'
import { Response } from 'express'

export const resError = (res: Response, error: HttpError | any) => {
  res.status(error.status || 400)
  res.json({ message: error.message })
}
