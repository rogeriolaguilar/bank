class EventProcessor {
  constructor(logger = console){
    this._logger = logger
  }

  process(event){
    this._logger.log(`processing event: ${JSON.stringify(event)}`)
    event.process()
  }
}
module.exports = EventProcessor