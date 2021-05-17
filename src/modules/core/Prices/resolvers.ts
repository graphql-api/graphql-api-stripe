import { ResolverMap } from '../../../types'
import { withExpanded } from '../../directives'

export const resolvers: ResolverMap = {
  Query: {
    async retrievePrice(root, args, context, info) {
      return context.dataSources.stripe.prices.retrieve(args)
    },
    async listPrices(root, args, context, info) {
      return context.dataSources.stripe.prices.list(args)
    }
  },
  Mutation: {
    async createPrice(root, args, context, info) {
      return context.dataSources.stripe.prices.create(args)
    },
    async updatePrice(root, args, context, info) {
      return context.dataSources.stripe.prices.update(args)
    }
  }
}
