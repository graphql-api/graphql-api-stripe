import { withExpand } from "../../resolvers";

const expand = {
  ApplicationFee: ["account", "application"],
  ApplicationFeeList: ["data.account", "data.application"]
};

export const expandResolvers = {
  "Query.retrieveApplicationFee": [withExpand(expand["ApplicationFee"])],
  "Query.listApplicationFees": [withExpand(expand["ApplicationFeeList"])]
};
