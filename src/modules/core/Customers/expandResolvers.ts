import { withExpand } from "../../resolvers";

const expand = {
  Customer: ["default_source"],
  CustomerList: ["data.default_source"]
};

export const expandResolvers = {
  "Query.retrieveCustomer": [withExpand(expand["Customer"])],
  "Query.listCustomers": [withExpand(expand["CustomerList"])],
  "Mutation.createCustomer": [withExpand(expand["Customer"])],
  "Mutation.updateCustomer": [withExpand(expand["Customer"])]
};
