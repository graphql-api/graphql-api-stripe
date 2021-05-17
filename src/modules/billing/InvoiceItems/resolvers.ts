import { Resolvers } from './types'
import { withExpanded } from '../../directives'

export const expand = ['customer', 'invoice', 'subscription']

const exp = withExpanded(expand)

export const resolvers: Resolvers = {
  Query: {
    listInvoiceItems: (_, args, context, info) =>
      context.stripe.invoiceItems.list(...exp(args.where, info)),
    retrieveInvoiceItem: (_, args, context, info) =>
      context.stripe.invoiceItems.retrieve(...exp(args.where.invoiceItem))
  },
  Mutation: {
    createInvoiceItem: (_, args, context, info) =>
      context.stripe.invoiceItems.create(...exp(args.data, info)),
    deleteInvoiceItem: (_, args, context, info) =>
      context.stripe.invoiceItems.del(args.where.invoiceItem),
    updateInvoiceItem: (_, args, context, info) =>
      context.stripe.invoiceItems.update(
        args.where.invoiceItem,
        ...exp(args.data, info)
      )
  }
}
