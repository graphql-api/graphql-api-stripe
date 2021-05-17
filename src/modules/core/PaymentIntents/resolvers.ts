import { Resolvers } from './types'
import { withExpanded } from '../../directives'

const exp = withExpanded([
  'application',
  'customer',
  'on_behalf_of',
  'review',
  'transfer_data.destination'
])

export const resolvers: Resolvers = {
  Query: {
    retrievePaymentIntent: (_, args, context, info) =>
      context.dataSources?.stripe?.paymentIntents.retrieve(...exp(args.where.id, info)),
    listPaymentIntent: (_, args, context, info) =>
      context.dataSources?.stripe?.paymentIntents.list(...exp(args.where, info, ['data']))
  },
  Mutation: {
    cancelPaymentIntent: (_, args, context, info) =>
      context.dataSources?.stripe?.paymentIntents.cancel(
        args.where.id,
        ...exp(args.data, info)
      ),
    capturePaymentIntent: (_, args, context, info) =>
      context.dataSources?.stripe?.paymentIntents.capture(
        args.where.id,
        ...exp(args.data, info)
      ),
    confirmPaymentIntent: (_, args, context, info) =>
      context.dataSources?.stripe?.paymentIntents.confirm(
        args.where.id,
        ...exp(args.data, info)
      ),
    createPaymentIntent: (_, args, context, info) =>
      context.dataSources?.stripe?.paymentIntents.create(...exp(args.data, info)),
    updatePaymentIntent: (_, args, context, info) =>
      context.dataSources?.stripe?.paymentIntents.update(
        args.where.id,
        ...exp(args.data, info)
      )
  }
}
