import { Resolvers } from './types'
import { withExpanded } from '../../directives'

const exp = withExpanded([
  'balance_transaction',
  'destination',
  'failure_balance_transaction'
])

export const resolvers: Resolvers = {
  PayoutDestination: {
    __resolveType: (args, context, info) => '' // Card or BankAccount
  },
  Query: {
    retrievePayout: (_, args, context, info) =>
      context.dataSources?.stripe?.payouts.retrieve(...exp(args.where.id, info)),
    listPayouts: (_, args, context, info) =>
      context.dataSources?.stripe?.payouts.list(...exp(args.where, info))
  },
  Mutation: {
    createPayout: (_, args, context, info) =>
      context.dataSources?.stripe?.payouts.create(...exp(args.data, info)),
    updatePayout: (_, args, context, info) =>
      context.dataSources?.stripe?.payouts.update(args.where.id, ...exp(args.data, info)),
    cancelPayout: (_, args, context, info) =>
      context.dataSources?.stripe?.payouts.cancel(args.where.id)
  }
}
