import { withExpand } from "../../resolvers";

const expand = {
  BalanceTransaction: ["source"],
  BalanceTransactionList: ["data.source"]
};

export const expandResolvers = {
  "Query.retrieveBalanceTransaction": [
    withExpand(expand["BalanceTransaction"])
  ],
  "Query.listBalanceHistory": [withExpand(expand["BalanceTransactionList"])]
};
