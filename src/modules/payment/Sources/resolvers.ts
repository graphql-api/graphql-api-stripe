import { Resolvers } from '../../../types'

export const resolvers: Partial<Resolvers> = {
  Query: {
    retrieveSource: (_, args, context, info) =>
      context.dataSources?.stripe?.sources.recieve(args.where.id)
  },
  Mutation: {
    createSource: (_, args, context, info) =>
      context.dataSources?.stripe?.sources.create(args.data),
    updateSource: (_, args, context, info) =>
      context.dataSources?.stripe?.sources.update(args.where.id, args.data),
    attachSource: (
      _,
      { whereCustomer: { id }, whereSource: { id: source } },
      context,
      info
    ) =>
      context.dataSources?.stripe?.customers.createSource(id, {
        source
      }),
    detachSource: (_, args, context, info) =>
      context.dataSources?.stripe?.customers.deleteSource(
        args.whereCustomer.id,
        args.whereSource.id
      )
  }
}
