import { Resolvers } from './types'

export const resolvers: Resolvers = {
  Query: {
    listSubscriptionItemPeriodSummaries: (
      _,
      { where: { subscription_item, ...where } },
      context
    ) => context.stripe.usageRecordSummaries.list(subscription_item, where)
  },
  Mutation: {
    createUsageRecord: (_, args, context) =>
      context.stripe.usageRecords.create(
        args.where.subscription_item,
        args.data
      )
  }
}
