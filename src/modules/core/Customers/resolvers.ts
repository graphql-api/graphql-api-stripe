import { ResolverMap } from '../../../types'

export const resolvers: ResolverMap = {
  Query: {
    retrieveCustomer: (_, { where, expand }, context, info) =>
      context.dataSources?.stripe?.customers.retrieve({ ...where, expand }),
    listCustomers: (_, { where, expand }, context, info) => {
      return context.dataSources?.stripe?.customers.list({
        ...where,
        expand
      })
    }
  },
  Mutation: {
    createCustomer: (_, { data, expand }, context, info) =>
      context.dataSources?.stripe?.customers.create({ ...data, expand }),
    updateCustomer: (_, { where: { id }, data, expand }, context, info) =>
      context.dataSources?.stripe?.customers.update(id, { ...data, expand }),
    deleteCustomer: (_, args, context) =>
      context.dataSources?.stripe?.customers.del(args.where.id)
  }
}

// export const resolvers = composeResolvers(stripeResolvers, expandResolvers)
