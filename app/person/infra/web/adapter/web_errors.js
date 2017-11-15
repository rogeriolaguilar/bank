class WebConflictError extends Error {
  get code() { return 409 }
}

class NotFoundError extends Error {
  get code() { return 404 }
}

module.exports = {
  WebConflictError: WebConflictError,
  NotFoundError: NotFoundError
}
