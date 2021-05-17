import { ResolverMap } from '../../../types'
import { withExpanded } from '../../directives'

const expand = [
  'application',
  'application_fee',
  'balance_transaction',
  'customer',
  'disput',
  'invoice',
  'on_behalf_of',
  'order',
  'review',
  'transfer',
  'transfer_data.destination'
]

const exp = withExpanded(expand)

export const resolvers: ResolverMap = {
  Query: {
    listCharges: (parent, args, context, info) =>
      context.dataSources?.stripe?.charges.list(
        ...exp(args.where, info, ['data'])
      ),
    async retrieveCharge(parent, args, context, info) {
      return context.dataSources?.stripe?.charges.retrieve(
        args?.where?.id,
        ...exp(args?.where?.id, info)
      )
    }
  },
  Mutation: {
    captureCharge: (parent, args, context, info) =>
      context.dataSources?.stripe?.charges.capture(args.where.id),
    createCharge: (parent, args, context, info) =>
      context.dataSources?.stripe?.charges.create(...exp(args.data, info)),
    updateCharge: (parent, args, context, info) =>
      context.dataSources?.stripe?.charges.update(
        args.where.id,
        ...exp(args.data, info)
      )
  }
}
