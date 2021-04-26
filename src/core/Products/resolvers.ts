import { Resolvers } from './types'

export const resolvers: Partial<Resolvers> = {
  Query: {
    listProducts: (_, args, context) =>
      context.stripe.products.list(args.where),
    retrieveProduct: (_, args, context) =>
      context.stripe.products.retrieve(args.where.id)
  },
  Mutation: {
    createProduct: (_, args, context) =>
      context.stripe.products.create(args.data),
    updateProduct: (_, args, context) =>
      context.stripe.products.update(args.where.id, args.data),
    deleteProduct: (_, args, context) =>
      context.stripe.products.del(args.where.id)
  }
}
