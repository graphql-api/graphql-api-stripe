import { Resolvers } from './types'
import { withExpanded } from '../../directives'
const exp = withExpanded(['file'])

export const resolvers: Resolvers = {
  Query: {
    listFileLinks: (_, args, context, info) =>
      context.dataSources?.stripe?.fileLinks.list(...exp(args.where, info, ['data'])),
    retrieveFileLink: (_, args, context, info) =>
      context.dataSources?.stripe?.fileLinks.retrieve(...exp(args.where.id, info))
  },
  Mutation: {
    createFileLink: (_, args, context, info) =>
      context.dataSources?.stripe?.fileLinks.create(args.whereFile, ...exp(args.data, info)),
    updateFileLink: (_, args, context, info) =>
      context.dataSources?.stripe?.fileLinks.update(args.where, ...exp(args.data, info))
  }
}
