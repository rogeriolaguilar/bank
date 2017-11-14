
class ConflictError extends Error {
  get code() { return 'CONFLICT' }
}

class GenericError extends Error {
  get code() { return 'GENERIC' }
}

module.exports = {
  ConflictError: ConflictError,
  GenericError: GenericError
}