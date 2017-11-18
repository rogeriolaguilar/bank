class NotFoundError extends Error {
  get code() { return 'NOTFOUND' }
}

class ConflictError extends Error {
  get code() { return 'CONFLICT' }
}

class InvalidDataError extends Error {
  get code() { return 'INVALIDDATA'}
}

class GenericError extends Error {
  get code() { return 'GENERIC' }
}

module.exports = {
  NotFoundError: NotFoundError,
  ConflictError: ConflictError,
  InvalidDataError: InvalidDataError,
  GenericError: GenericError
}