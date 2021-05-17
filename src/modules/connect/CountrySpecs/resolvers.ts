import { Resolvers } from './types'

export const resolvers: Resolvers = {
  Query: {
    listCountrySpec: (_, args, context) =>
      context.dataSources?.stripe?.countrySpecs.list(args.where),
    retrieveCountrySpec: (_, args, context) =>
      context.dataSources?.stripe?.countrySpecs.retrieve(args.where.country)
  }
}
