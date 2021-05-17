import { Resolvers } from '../../../types'
import { withExpanded } from '../../directives'

const exp = withExpanded(['account', 'customer', 'recipient'])

export const resolvers: Partial<Resolvers> = {
  Query: {
    listCards: (parent, args, context, info) =>
      context.stripe.customers.listCards(
        args.whereCustomer.id,
        ...exp(args.input, info, ['data'])
      ),
    retrieveCard: (parent, args, context, info) =>
      context.stripe.customers.retrieveCard(...exp(args.where.id, info))
  },
  Mutation: {
    createCard: (parent, args, context, info) =>
      context.stripe.customers.createSource(...exp(args.data, info)),
    deleteCard: (parent, args, context, info) =>
      context.stripe.customers.deleteSource(...exp(args.where.id, info)),
    updateCard: (parent, args, context, info) =>
      context.stripe.customers.updateSource(
        args.where.id,
        ...exp(args.data, info)
      )
  }
}
