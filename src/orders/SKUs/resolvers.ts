import { Resolvers } from './types'
import { withExpanded } from '../../directives'

export const expand = ['product']

const exp = withExpanded(expand)

export const resolvers: Resolvers = {
  Query: {
    listSKUs: (_, args, context, info) =>
      context.stripe.skus.list(...exp(args.where, info)),
    retrieveSKU: (_, args, context, info) =>
      context.stripe.skus.retrieve(args.where.id, ...exp({}, info))
  },
  Mutation: {
    createSKU: (_, args, context, info) =>
      context.stripe.skus.create(...exp(args.data, info)),
    deleteSKU: (_, args, context, info) =>
      context.stripe.skus.del(args.where.id),
    updateSKU: (_, args, context, info) =>
      context.stripe.skus.update(args.where.id, ...exp(args.data, info))
  }
}
