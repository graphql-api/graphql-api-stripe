import { Resolvers } from '../../../types'
import { withExpanded } from '../../directives'

const exp = withExpanded(['account', 'customer'])

export const resolvers: Partial<Resolvers> = {
  Query: {
    listBankAccounts: (parent, args, context, info) =>
      context.stripe.customers.listSources(
        args.whereCustomer.id,
        ...exp(args.input, info)
      ),
    retrieveBankAccount: (parent, args, context, info) =>
      context.stripe.customers.retrieveSource(
        args.whereCustomer.id,
        ...exp(args.whereBankAccount.id, info)
      )
  },
  Mutation: {
    createBankAccount: (parent, args, context, info) =>
      context.stripe.customers.createSource(
        args.whereCustomer.id,
        ...exp(args.data, info)
      ),
    deleteBankAccount: (parent, args, context, info) =>
      context.stripe.customers.deleteSource(
        args.whereCustomer.id,
        ...exp<string>(args.whereBankAccount.id, info)
      ),
    updateBankAccount: (parent, args, context, info) =>
      context.stripe.customers.updateCard(
        args.whereCustomer.id,
        ...exp(args.data, info)
      ),
    verifyBankAccount: (parent, args, context, info) =>
      context.stripe.customers.verifySource(
        args.whereCustomer.id,
        ...exp(args.data, info)
      )
  }
}
