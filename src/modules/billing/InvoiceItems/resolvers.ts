import { ResolverMap } from '../../../types'
import { withExpanded } from '../../directives'

export const expand = ['customer', 'invoice', 'subscription']

const exp = withExpanded(expand)

export const resolvers: ResolverMap = {
  Query: {
    listInvoiceItems: (_, args, context, info) =>
      context.dataSources?.stripe?.invoiceItems.list(...exp(args.where, info)),
    retrieveInvoiceItem: (_, args, context, info) =>
      context.dataSources?.stripe?.invoiceItems.retrieve(
        ...exp(args.where.invoiceItem, info)
      )
  },
  Mutation: {
    createInvoiceItem: (_, args, context, info) =>
      context.dataSources?.stripe?.invoiceItems.create(...exp(args.data, info)),
    deleteInvoiceItem: (_, args, context, info) =>
      context.dataSources?.stripe?.invoiceItems.del(args.where.invoiceItem),
    updateInvoiceItem: (_, args, context, info) =>
      context.dataSources?.stripe?.invoiceItems.update(
        args.where.invoiceItem,
        ...exp(args.data, info)
      )
  }
}
