import { GraphQLResolveInfo } from 'graphql'
import { HeaderOptions } from 'stripe'
import { Resolvers } from './types'
import * as Stripe from 'stripe'
import { withExpanded } from '../../directives'

const expand = [
  'application',
  'application_fee',
  'balance_transaction',
  'customer',
  'disput',
  'invoice',
  'on_behalf_of',
  'order',
  'review',
  'transfer',
  'transfer_data.destination'
]

const exp = withExpanded(expand)

export const resolvers: Resolvers = {
  Query: {
    listCharges: (parent, args, context, info) =>
      context.stripe.charges.list(...exp(args.where, info, ['data'])),
    retrieveCharge: (parent, args, context, info) =>
      context.stripe.charges.retrieve(...exp(args?.where?.id, info))
  },
  Mutation: {
    captureCharge: (parent, args, context, info) =>
      context.stripe.charges.capture(args.where.id, ...exp(args.data)),
    createCharge: (parent, args, context, info) =>
      context.stripe.charges.create(...exp(args.data, info)),
    updateCharge: (parent, args, context, info) =>
      context.stripe.charges.update(args.where.id, ...exp(args.data, info))
  }
}
