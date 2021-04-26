import { Resolvers } from './types'
import { withExpanded } from '../../directives'

export const expands = ['charge', 'customer', 'default_source', 'subscription']

const exp = withExpanded(expands)

export const resolvers: Resolvers = {
  Query: {
    retrieveUpcomingInvoice: (_, args, context, info) =>
      context.stripe.invoices.retrieveUpcoming(
        ...exp(args.where.invoice, info)
      ),
    listInvoices: (_, args, context, info) => context.stripe.invoices,
    retrieveInvoice: (_, args, context, info) => context.stripe.invoices,
    retrieveInvoiceLineItem: (_, args, context, info) =>
      context.stripe.invoices,
    retrieveUpcomingInvoiceLineItems: (_, args, context, info) =>
      context.stripe.invoices
  },
  Mutation: {
    createInvoice: (_, args, context, info) =>
      context.stripe.invoices.create(...exp(args.data, info)),
    deleteDraftInvoice: (_, args, context, info) =>
      context.stripe.invoices.del(args.where.invoice),
    finalizeInvoice: (_, args, context, info) =>
      context.stripe.invoices.finalizeInvoice(
        args.where.invoice,
        ...exp(args.data, info)
      ),
    markInvoiceUncollectible: (_, args, context, info) =>
      context.stripe.invoices.markUncollectible(
        ...exp(args.where.invoice, info)
      ),
    payInvoice: (_, args, context, info) =>
      context.stripe.invoices.pay(args.where.invoice, ...exp(args.data, info)),
    sendInvoice: (_, args, context, info) =>
      context.stripe.invoices.sendInvoice(args.where.invoice, ...exp({}, info)),
    updateInvoice: (_, args, context, info) =>
      context.stripe.invoices(args.where.invoice, ...exp(args.data, info)),
    voidInvoice: (_, args, context, info) =>
      context.stripe.invoices(args.where.invoice, ...exp({}, info))
  }
}
