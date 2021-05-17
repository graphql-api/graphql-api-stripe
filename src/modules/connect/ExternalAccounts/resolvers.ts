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
      context.stripe.accounts.retrieveExternalAccount(args.whereAccount.id, {
        object: 'card'
      }),
    listExternalBankAccounts: (_, args, context, info) =>
      context.stripe.accounts.listExternalAccounts(args.where.id, {
        object: 'bank_account'
      })
  },
  Mutation: {
    createExternalBankAccount: (_, args, context, info) =>
      context.stripe.accounts.createExternalAccount(args.whereAccount.id),
    createExternalCard: (_, args, context, info) => context.stripe.accounts,
    updateExternalBankAccount: (_, args, context, info) =>
      context.stripe.accounts,
    updateExternalCard: (_, args, context, info) => context.stripe.accounts,
    deleteExternalBankAccount: (_, args, context, info) =>
      context.stripe.accounts,
    deleteExternalCard: (_, args, context, info) => context.stripe.accounts
  }
}
