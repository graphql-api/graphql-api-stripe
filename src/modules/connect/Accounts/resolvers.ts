import { Resolvers } from './types'
import { withExpanded } from '../../directives'

export const expand = [
  'individual.verification.document.back',
  'individual.verification.document.front',
  'settings.branding.icon',
  'settings.branding.logo',
  'settings.branding.primary_color'
]

const exp = withExpanded(expand)

export const Account = {
  __resolveType: ({ type }) => {
    switch (type) {
      case 'custom':
        return 'CustomAccount'
      case 'express':
        return 'ExpressAccount'
      case 'standard':
        return 'StandardAccount'
      default:
        return null
    }
  }
}

export const resolvers: Resolvers = {
  Account,
  Query: {
    listConnectedAccounts: (_, args, context, info) =>
      context.dataSources?.stripe?.accounts.list(...exp(args.where, info, ['data'])),
    retrieveAccount: (_, args, context, info) =>
      context.dataSources?.stripe?.accounts.retrieve(...exp(args.where.id, info))
  },
  Mutation: {
    createAccount: (_, args, context, info) =>
      context.dataSources?.stripe?.accounts.create(...exp(args.data, info)),
    updateAccount: (_, args, context, info) =>
      context.dataSources?.stripe?.accounts.update(args.where.id, ...exp(args.where, info)),
    rejectAccount: (_, args, context, info) =>
      context.dataSources?.stripe?.accounts.reject(args.where.id, ...exp(args.data, info)),
    deleteAccount: (_, args, context) =>
      context.dataSources?.stripe?.accounts.del(args.where.id),
    createLoginLink: (_, args, context, info) =>
      context.dataSources?.stripe?.accounts.createLoginLink(args.whereAccount.id, args.data)
  }
}
