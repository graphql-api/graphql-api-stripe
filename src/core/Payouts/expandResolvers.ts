import { withExpand } from "../../resolvers";

const expand = {
  Payout: [
    "balance_transaction",
    "balance_transaction.source",
    "destination",
    "failure_balance_transaction",
    "failure_balance_transaction.source"
  ],
  PayoutList: [
    "data.balance_transaction",
    "data.balance_transaction.source",
    "data.destination",
    "data.failure_balance_transaction",
    "data.failure_balance_transaction.source"
  ]
};

export const expandResolvers = {
  "Query.retrievePayout": [withExpand(expand["Payout"])],
  "Query.listPayouts": [withExpand(expand["PayoutList"])],
  "Mutation.createPayout": [withExpand(expand["Payout"])],
  "Mutation.updatePayout": [withExpand(expand["Payout"])],
  "Mutation.cancelPayout": [withExpand(expand["Payout"])]
};
