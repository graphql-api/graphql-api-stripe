import { ResolverMap } from '../../../types'

import { withExpanded } from '../../directives'

export const expand = ['customer']

export const resolvers: ResolverMap = {
  Mutation: {
    deleteCustomerDiscount: (_, args, context) =>
      context.dataSources?.stripe?.customers.deleteDiscount(
        args.whereCustomer.id
      ),
    deleteSubscriptionDiscount: (_, args, context) =>
      context.dataSources?.stripe?.subscriptions.deleteDiscount(
        args.whereSubscription.id
      )
  }
}
