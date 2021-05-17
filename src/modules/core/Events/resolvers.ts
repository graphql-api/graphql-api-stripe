import { Resolvers } from './types'

export const resolvers: Resolvers = {
  Query: {
    retrieveEvent: (_, args, context) =>
      context.dataSources?.stripe?.events.retrieve(args.where.id),
    listEvents: (_, args, context) => context.dataSources?.stripe?.events.list(args.where)
  }
}
