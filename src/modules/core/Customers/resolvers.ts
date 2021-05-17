import {
  Resolvers,
  Customer,
  QueryListCustomersArgs,
  MutationCreateCustomerArgs,
  MutationUpdateCustomerArgs,
  ObjectType
} from '../../../types'
import { getDirectives } from 'graphql-toolkit'
import { composeResolvers } from 'graphql-toolkit'
import { expandResolvers } from './expandResolvers'

interface CustomersResolvers {
  Query: Pick<Resolvers['Query'], 'listCustomers' | 'retrieveCustomer'>
  Mutation: Pick<
    Resolvers['Mutation'],
    'createCustomer' | 'updateCustomer' | 'deleteCustomer'
  >
}

const stripeResolvers: CustomersResolvers = {
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

export const resolvers = composeResolvers(stripeResolvers, expandResolvers)
