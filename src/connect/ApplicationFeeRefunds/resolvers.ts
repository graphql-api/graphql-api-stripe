import { Resolvers } from './types'
import { withExpanded } from '../../directives'

export const expand = ['balance_transaction', 'fee']

const exp = withExpanded(expand)

export const resolvers: Resolvers = {
  Query: {
    listApplicationFeeRefunds: (_, args, context, info) =>
      context.stripe.applicationFees.listRefunds(
        ...exp(args.whereApplicationFeeRefundsList, info, ['data'])
      ),
    retrieveApplicationFeeRefund: (_, args, context, info) =>
      context.stripe.applicationFees.retreiveRefund(
        args.whereApplicationFee.id,
        ...exp(args.whereApplicationFeeRefund.id, info)
      )
  },
  Mutation: {
    createApplicationFeeRefund: (_, args, context, info) =>
      context.stripe.applicationFees.createRefund(
        args.where.id,
        ...exp(args.data, info)
      ),
    updateApplicationFeeRefund: (_, args, context, info) =>
      context.stripe.applicationFees.updateRefund(
        args.whereApplicationFee.id,
        args.whereApplicationFeeRefund.id,
        ...exp(args.data, info)
      )
  }
}
