import { Resolvers } from './types'

export const resolvers: Partial<Resolvers> = {
  Query: {
    retrieveFile: (_, args, context, info) =>
      context.dataSources?.stripe?.files.retrieve(args.where.id),
    listFiles: (_, args, context, info) => context.dataSources?.stripe?.files.list(args.where)
  }
  // Mutation: {

  // }
}
