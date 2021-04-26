import { Resolvers } from './types'
import { withExpanded } from '../../directives'

export const expand = [
  'account',
  'application',
  'balance_transaction',
  'charge',
  'currency',
  ''
]

const exp = withExpanded(expand)

export const resolvers: Resolvers = {
  OriginatingTransaction: {
    __resolveType: ({ object }, context, info) => {
      switch (object) {
        case 'transfer':
          return 'Transfer'
        case 'charge':
          return 'Charge'
        default:
          return null
      }
    }
  },
  Query: {
    listApplicationFees: (_, args, context, info) =>
      context.stripe.applicationFees.list(...exp(args.where, info, ['data'])),
    retrieveApplicationFee: (_, args, context, info) =>
      context.stripe.applicationFees.retrieve(...exp(args.where.id, info))
  }
}
