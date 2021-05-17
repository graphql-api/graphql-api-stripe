import { withExpand } from "../../resolvers";

const expand = {
  BankAccount: ["account", "customer", "customer.default_source"],
  BankAccountList: [
    "data.account",
    "data.customer",
    "data.customer.default_source"
  ],
  Card: ["account", "customer", "customer.default_source"],
  CardList: ["data.account", "data.customer", "data.customer.default_source"]
};

export const expandResolvers = {
  "Query.retrieveExternalBankAccount": [withExpand(expand["BankAccount"])],
  "Query.listExternalBankAccounts": [withExpand(expand["BankAccountList"])],
  "Query.retrieveExternalCard": [withExpand(expand["Card"])],
  "Query.listExternalCards": [withExpand(expand["CardList"])],
  "Mutation.createExternalBankAccount": [withExpand(expand["BankAccount"])],
  "Mutation.updateExternalBankAccount": [withExpand(expand["BankAccount"])],
  "Mutation.deleteExternalBankAccount": [withExpand(expand["BankAccount"])],
  "Mutation.createExternalCard": [withExpand(expand["Card"])],
  "Mutation.updateExternalCard": [withExpand(expand["Card"])],
  "Mutation.deleteExternalCard": [withExpand(expand["Card"])]
};
