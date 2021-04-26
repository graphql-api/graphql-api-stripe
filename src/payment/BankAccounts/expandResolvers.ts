import { withExpand } from "../../resolvers";

const expand = {
  BankAccount: ["account", "customer", "customer.default_source"],
  BankAccountList: [
    "data.account",
    "data.customer",
    "data.customer.default_source"
  ]
};

export const expandResolvers = {
  "Query.retrieveBankAccount": [withExpand(expand["BankAccount"])],
  "Query.listBankAccounts": [withExpand(expand["BankAccountList"])],
  "Mutation.createBankAccount": [withExpand(expand["BankAccount"])],
  "Mutation.updateBankAccount": [withExpand(expand["BankAccount"])],
  "Mutation.verifyBankAccount": [withExpand(expand["BankAccount"])]
};
