import { Resolvers } from './types'
import { withExpanded } from '../../directives'

const expDisputeEvidence = [
  'cancellation_policy',
  'customer_communication',
  'customer_signature',
  'duplicate_charge_documentation',
  'receipts',
  'refund_policy',
  'service_documentation',
  'shipping_documentation',
  'uncategorized_file'
].map(field => `evidence.${field}`)

const exp = withExpanded(['charge', ...expDisputeEvidence])

export const resolvers: Resolvers = {
  Query: {
    retrieveDispute: (_, args, context, info) =>
      context.stripe.disputes.retrieve(...exp(args.where.id, info)),
    listDisputes: (_, args, context, info) =>
      context.stripe.disputes.list(...exp(args.where, info, ['data']))
  },
  Mutation: {
    closeDispute: (_, args, context, info) =>
      context.stripe.disputes.close(...exp(args.where)),
     updateDispute:(_, args, context, info) =>
      context.stripe.disputes.update(args.where, ...exp(args.data, info))
  }
}
