import { GraphQLModule } from '@graphql-modules/core'
import typeDefs from './typeDefs.graphql'
import { retrieveCoupon } from './resolvers'

export const Coupon = new GraphQLModule({
  typeDefs,
  resolvers: { Query: retrieveCoupon }
})
