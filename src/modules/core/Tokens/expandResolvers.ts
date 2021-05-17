import { withExpand } from "../../resolvers";

const expand = {
  CardToken: ["card.account", "card.customer", "card.customer.default_source"],
  BankAccountToken: [
    "bank_account.account",
    "bank_account.customer",
    "bank_account.customer.default_source"
  ]
};

export const expandResolvers = {
  "Mutation.createCardToken": [withExpand(expand["CardToken"])],
  "Mutation.createCustomerCardToken": [withExpand(expand["CardToken"])],
  "Mutation.createBankAccountToken": [withExpand(expand["BankAccountToken"])],
  "Mutation.createCustomerBankAccountToken": [
    withExpand(expand["BankAccountToken"])
  ]
};
