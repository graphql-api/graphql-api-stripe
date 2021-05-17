import { Resolvers } from 'types'

export const resolvers: Partial<Resolvers> = {
  Query: {
    retrieveCoupon: (_, args, context) =>
      context.stripe.coupons.retrieve(args.where.id),
    listCoupons: (_, args, context) => context.stripe.coupons.list(args.where)
  },
  Mutation: {
    createCoupon: (_, args, context) =>
      context.stripe.coupons.create(args.data),
    updateCoupon: (_, args, context) =>
      context.stripe.coupons.update(args.where.id, args.data),
    deleteCoupon: (_, args, context) =>
      context.stripe.coupons.del(args.where.id)
  }
}
