import { StripeDataSource } from './datasource'
import { GraphQLResolverMap } from 'apollo-graphql'

export type ResolverMap = GraphQLResolverMap<{
  dataSources: { stripe: StripeDataSource }
}>
