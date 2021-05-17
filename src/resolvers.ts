import {
  JSONResolver,
  DateResolver,
  DateTimeResolver,
  TimeResolver
} from 'graphql-scalars'
import merge from 'lodash/merge'
import NodeResolver from './modules/nodeResolver'
import ObjectResolver from './modules/objectInterface'
import { Account } from './modules/connect/Accounts/resolvers'
import { ExternalAccount } from './modules/connect/ExternalAccounts/resolvers'
import { Token } from './modules/core/Tokens/resolvers'
import { ObjectItemParent } from './modules/orders/OrderItems/resolvers'
import { resolvers as balanceResolvers } from './modules/core/Balance/resolvers'
// import { resolvers as chargesResolvers } from './modules/core/Charges/resolvers'
// import { resolvers as customersResolvers } from './modules/core/Customers/resolvers'
// import { resolvers as disputesResolvers } from './modules/core/Disputes/resolvers'
// import { resolvers as eventsesolvers } from './modules/core/Events/resolvers'
// import { resolvers as fileLinksResolvers } from './modules/core/FileLinks/resolvers'
// import { resolvers as filesResolvers } from './modules/core/Files/resolvers'
// import { resolvers as paymentIntentsResolvers } from './modules/core/PaymentIntents/resolvers'
// import { resolvers as payoutsResolvers } from './modules/core/Payouts/resolvers'
// import { resolvers as pricesResolvers } from './modules/core/Prices/resolvers'
// import { resolvers as productsResolvers } from './modules/core/Products/resolvers'
// import { resolvers as refundessResolvers } from './modules/core/Refunds/resolvers'
// import { resolvers as tokensResolvers } from './modules/core/Tokens/resolvers'

export const resolvers = merge(
  {
    Date: DateResolver,
    Time: TimeResolver,
    DateTime: DateTimeResolver,
    JSON: JSONResolver,
    Node: NodeResolver,
    Object: ObjectResolver,
    ExternalAccount,
    Account,
    Token,
    ObjectItemParent
  },
  balanceResolvers,
  // chargesResolvers,
  // customersResolvers,
  // disputesResolvers,
  // eventsesolvers,
  // fileLinksResolvers,
  // filesResolvers,
  // paymentIntentsResolvers,
  // payoutsResolvers,
  // pricesResolvers,
  // productsResolvers,
  // refundessResolvers,
  // tokensResolvers
)

export default resolvers

// const selectionsToString = ({ name, selectionSet }) => {
//   const nextName = name ? name.value + '.' : ''
//   if (selectionSet && selectionSet.selections) {
//     return selectionSet.selections.reduce(
//       (prev, curr) => [
//         ...prev,
//         `${nextName}${curr.name.value}`,
//         ...selectionsToString(curr).map(field => `${nextName}${field}`)
//       ],
//       []
//     )
//   } else {
//     return name ? [name.value] : []
//   }
// }

// export const payloadToString = ({ fieldName, fieldNodes }) => {
//   const mainNode = fieldNodes.find(
//     fieldNode =>
//       fieldNode && fieldNode.name && fieldNode.name.value === fieldName
//   )
//   if (!!mainNode && mainNode.selectionSet) {
//     return selectionsToString({ selectionSet: mainNode.selectionSet })
//   }
// }

// export const withExpand = fields => next => async (
//   root,
//   args,
//   context,
//   info
// ) => {
//   const expand = fields.filter(e => payloadToString(info).includes(e))
//   return next(root, { ...args, expand }, context, info)
// }
