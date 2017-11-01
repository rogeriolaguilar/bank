class AccountCreateEvent{
  constructor(account, person, occurredAt){
    this.occurredAt = occurredAt
    this.account = account
    this.person = person
  }

  process(){
    AccountService.create(this.account, this.person)
  }

  reverte(){
    AccountService.deativate(this.account, this.person)
  }
}