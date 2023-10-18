import createError from 'http-errors'

export const BadRequest = (msg: string) => {
  throw createError(400, msg)
}
