import { withExpand } from "../../resolvers";

const expand = {
  Card: ["account", "customer", "customer.default_source"],
  CardList: ["data.account", "data.customer", "data.customer.default_source"]
};

export const expandResolvers = {
  "Query.retrieveCard": [withExpand(expand["Card"])],
  "Query.listCards": [withExpand(expand["CardList"])],
  "Mutation.createCard": [withExpand(expand["Card"])],
  "Mutation.updateCard": [withExpand(expand["Card"])],
  "Mutation.deleteCard": [withExpand(expand["Card"])]
};
