import { withExpand } from "../../resolvers";

const expand = {
  SKU: ["product"],
  SKUList: ["data.product"]
};

export const expandResolvers = {
  "Query.retrieveSKU": [withExpand(expand["SKU"])],
  "Query.listSKUs": [withExpand(expand["SKUList"])],
  "Mutation.createSKU": [withExpand(expand["SKU"])],
  "Mutation.updateSKU": [withExpand(expand["SKU"])]
};
