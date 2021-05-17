import { DataSource } from 'apollo-datasource'
import Stripe from 'stripe'

type StripeParams = ConstructorParameters<typeof Stripe>

export class StripeDataSource extends Stripe implements DataSource {
  constructor(...params: StripeParams) {
    super(...params)
  }
  initialize() {}
}
