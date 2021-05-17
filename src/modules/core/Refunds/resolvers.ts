import { Resolvers } from './types'
import { withExpanded } from '../../directives'

const exp = withExpanded([
  'balance_transaction',
  'charge',
  'failure_balance_transaction',
  'source_transfer_reversal',
  'transfer_reversal'
])

export const resolvers: Resolvers = {
  Query: {
    listRefunds: (_, args, context, info) =>
      context.dataSources?.stripe?.refunds.list(...exp(args.where, info, ['data'])),
    retrieveRefund: (_, args, context, info) =>
      context.dataSources?.stripe?.refunds.retrieve(...exp(args.where.id, info))
  },
  Mutation: {
    createRefund: (_, args, context, info) =>
      context.dataSources?.stripe?.refunds.create(
        ...exp({ charge: args.whereCharge.id, ...args.data }, info)
      ),
    updateRefund: (_, args, context, info) =>
      context.dataSources?.stripe?.refunds.update(args.where.id, ...exp(args.data, info))
  }
}
