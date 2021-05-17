import { ResolverMap } from '../../../types'

export const resolvers: ResolverMap = {
  Query: {
    retrieveCoupon: (_, args, context) =>
      context.dataSources?.stripe?.coupons.retrieve(args.where.id),
    listCoupons: (_, args, context) =>
      context.dataSources?.stripe?.coupons.list(args.where)
  },
  Mutation: {
    createCoupon: (_, args, context) =>
      context.dataSources?.stripe?.coupons.create(args.data),
    updateCoupon: (_, args, context) =>
      context.dataSources?.stripe?.coupons.update(args.where.id, args.data),
    deleteCoupon: (_, args, context) =>
      context.dataSources?.stripe?.coupons.del(args.where.id)
  }
}
