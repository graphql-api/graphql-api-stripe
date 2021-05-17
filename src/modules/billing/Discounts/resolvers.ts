import { Resolvers } from './types'
import { withExpanded } from '../../directives'

export const expand = ['customer']

export const resolvers: Resolvers = {
  Mutation: {
    deleteCustomerDiscount: (_, args, context) =>
      context.stripe.customers.deleteDiscount(args.whereCustomer.id),
    deleteSubscriptionDiscount: (_, args, context) =>
      context.stripe.subscriptions.deleteDiscount(args.whereSubscription.id)
  }
}
