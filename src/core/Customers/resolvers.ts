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
      context.stripe.customers.retrieve({ ...where, expand }),
    listCustomers: (_, { where, expand }, context, info) => {
      return context.stripe.customers.list({
        ...where,
        expand
      })
    }
  },
  Mutation: {
    createCustomer: (_, { data, expand }, context, info) =>
      context.stripe.customers.create({ ...data, expand }),
    updateCustomer: (_, { where: { id }, data, expand }, context, info) =>
      context.stripe.customers.update(id, { ...data, expand }),
    deleteCustomer: (_, args, context) =>
      context.stripe.customers.del(args.where.id)
  }
}

export const resolvers = composeResolvers(stripeResolvers, expandResolvers)
