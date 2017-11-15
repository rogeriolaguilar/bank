class MockEventRepository {

  constructor(isError = false) {
    this.error = isError
  }

  save(event) {
    return new Promise((fulfill, reject) => {
      if (this.error) {
        console.log("MockEventRepository error")
        reject(new Error('errors'))
      }
      console.log("MockEventRepository sucess")
      fulfill(event)
    })
  }
}

module.exports = MockEventRepository
