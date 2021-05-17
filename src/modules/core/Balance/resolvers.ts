import { ResolverMap } from '../../../types'

export const resolvers: ResolverMap = {
  Query: {
    listBalanceHistory: (_, { where, expand }, context) =>
      context.dataSources?.stripe?.balanceTransactions.list({
        ...where,
        expand
      }),
    retrieveBalance: (_, __, context) =>
      context.dataSources?.stripe?.balance.retrieve(),
    retrieveBalanceTransaction: (_, { where, expand }, context) =>
      context.dataSources?.stripe?.balanceTransactions.retrieve({
        ...where,
        expand
      })
  }
}
