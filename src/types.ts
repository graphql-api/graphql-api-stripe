import { StripeDataSource } from './dataSource'
import { GraphQLResolverMap } from 'apollo-graphql'

export type ResolverMap = GraphQLResolverMap<{
  dataSources: { stripe: StripeDataSource }
}>
