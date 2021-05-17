import { DataSource } from 'apollo-datasource'
import Stripe from 'stripe'

type StripeParams = ConstructorParameters<typeof Stripe>

export class StripeDataSource extends DataSource {
  client: Stripe
  private initClient(...params: StripeParams) {
    this.client = new Stripe(...params)
  }
  constructor(...params: StripeParams | []) {
    super()
    if (typeof params[0] === 'string') {
      this.initClient(...(params as StripeParams))
    }
  }

  initialize() {}
}
