import { Resolvers } from '@types'

export const ExternalAccount = {
  __resolveType: ({ object }, context, info) => {
    switch (object) {
      case 'bank_account':
        return 'BankAccount'
      case 'card':
        return 'Card'
      default:
        return null
    }
  }
}

export const resolvers: Resolvers = {
  ExternalAccount,
  Query: {
    listExternalCards: (_, args, context, info) =>
      context.dataSources?.stripe?.accounts.retrieveExternalAccount(args.whereAccount.id, {
        object: 'card'
      }),
    listExternalBankAccounts: (_, args, context, info) =>
      context.dataSources?.stripe?.accounts.listExternalAccounts(args.where.id, {
        object: 'bank_account'
      })
  },
  Mutation: {
    createExternalBankAccount: (_, args, context, info) =>
      context.dataSources?.stripe?.accounts.createExternalAccount(args.whereAccount.id),
    createExternalCard: (_, args, context, info) => context.dataSources?.stripe?.accounts,
    updateExternalBankAccount: (_, args, context, info) =>
      context.dataSources?.stripe?.accounts,
    updateExternalCard: (_, args, context, info) => context.dataSources?.stripe?.accounts,
    deleteExternalBankAccount: (_, args, context, info) =>
      context.dataSources?.stripe?.accounts,
    deleteExternalCard: (_, args, context, info) => context.dataSources?.stripe?.accounts
  }
}
