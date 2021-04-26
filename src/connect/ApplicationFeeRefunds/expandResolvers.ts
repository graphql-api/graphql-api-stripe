import { withExpand } from "../../resolvers";

const expand = {
  ApplicationFeeRefund: ["balance_transaction", "balance_transaction.source"],
  ApplicationFeeRefundList: [
    "data.balance_transaction",
    "data.balance_transaction.source"
  ]
};

export const expandResolvers = {
  "Query.retrieveApplicationFeeRefund": [
    withExpand(expand["ApplicationFeeRefund"])
  ],
  "Query.listApplicationFeeRefunds": [
    withExpand(expand["ApplicationFeeRefundList"])
  ],
  "Mutation.createApplicationFeeRefund": [
    withExpand(expand["ApplicationFeeRefund"])
  ],
  "Mutation.updateApplicationFeeRefund": [
    withExpand(expand["ApplicationFeeRefund"])
  ]
};
