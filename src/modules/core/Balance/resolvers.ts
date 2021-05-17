import { Resolvers } from './types'
import { composeResolvers } from 'graphql-toolkit'
import { expandResolvers } from './expandResolvers'

export const resolvers = composeResolvers<Resolvers>(
  {
    Query: {
      listBalanceHistory: (_, { where, expand }, context) =>
        context.dataSources?.stripe?.balance.listTransactions({ ...where, expand }),
      retrieveBalance: (_, __, context) => context.dataSources?.stripe?.balance.retrieve(),
      retrieveBalanceTransaction: (_, { where, expand }, context) =>
        context.dataSources?.stripe?.balance.retrieveTransaction({ ...where, expand })
    }
  },
  expandResolvers
)
