import { ResolverMap } from '../../../types'

export const Token = {
  __resolveType: ({ object }) => {
    const prefix = object.split('_')[0]
    switch (prefix) {
      case 'tok':
        return 'CardToken'
      case 'btok':
        return 'BankAccountToken'
      case 'pii':
        return 'PIIToken'
      case 'ct':
        return 'AccountToken'
      default:
        return null
    }
  }
}

export const resolvers: ResolverMap = {
  Token,
  Query: {
    retrieveToken: (_, args, context) =>
      context.dataSources?.stripe?.tokens.retrieve(args.where.id)
  },
  Mutation: {
    createCardToken: (_, args, context) =>
      context.dataSources?.stripe?.tokens.create(args.data),
    createAccountToken: (_, args, context) =>
      context.dataSources?.stripe?.tokens.create(args.data),
    createBankAccountToken: (_, args, context) =>
      context.dataSources.stripe.tokens.create(args.data),
    createPIIToken: (_, args, context) =>
      context.dataSources.stripe.tokens.create(args.data),
    /*
     * https://stripe.com/docs/connect/shared-customers
     *
     */
    createCustomerBankAccountToken: (_, args, context) =>
      context.dataSources?.stripe?.tokens.create(args.data, {
        stripe_account: args.whereAccount.id
      }),
    createCustomerCardToken: (_, args, context) =>
      context.dataSources?.stripe?.tokens.create(args.data, {
        stripe_account: args.whereAccount.id
      })
  }
}
