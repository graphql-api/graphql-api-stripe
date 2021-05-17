import { Resolvers } from './types'

export const resolvers: Partial<Resolvers> = {
  Query: {
    retrieveFile: (_, args, context, info) =>
      context.stripe.files.retrieve(args.where.id),
    listFiles: (_, args, context, info) => context.stripe.files.list(args.where)
  }
  // Mutation: {

  // }
}
