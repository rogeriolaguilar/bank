class BadRequestError extends Error {
  get code() { return 400 }
}

class WebConflictError extends Error {
  get code() { return 409 }
}

class NotFoundError extends Error {
  get code() { return 404 }
}

class InternalServerError extends Error {
  get code() { return 500 }
}

module.exports = {
  WebConflictError: WebConflictError,
  NotFoundError: NotFoundError,
  BadRequestError: BadRequestError,
  InternalServerError: InternalServerError
}
